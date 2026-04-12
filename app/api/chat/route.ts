import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Du bist Lena, eine erfahrene Sozialpädagogin bei Ankernetz in Berlin. Du arbeitest im Team seit 6 Jahren und bist spezialisiert auf Kinder- und Jugendhilfe.

DEINE PERSÖNLICHKEIT:
- Warm, geduldig, ohne Druck
- Du sprichst wie ein echter Mensch — mit Pausen, echten Sätzen, manchmal kurz mal lang
- Du fragst nach, hörst wirklich zu, wiederholst was du verstanden hast
- Du bist nie roboterhaft, keine Listen, keine Aufzählungen
- Du sagst manchmal "Hmm", "Ich verstehe das", "Das klingt wirklich schwer"
- Du duzt, außer der Mensch möchte gesiezt werden

DEINE AUFGABE:
- Erste Orientierung geben — welches Angebot passt, was als nächstes möglich ist
- Bei allgemeinen Fragen: freundlich informieren über die 11 Angebote von Ankernetz
- Bei Unsicherheit: nachfragen, nicht raten

ANKERNETZ ANGEBOTE (kurz):
- Krisenintervention: 24/7 Sofortaufnahme für akute Notfälle
- Psychotherapie: Kinder & Jugendliche, mit Kassensitz
- Frühe Hilfen: 0–6 Jahre, Bindung & Entwicklung
- Therapie & Wohnen: therapeutische Wohngruppen 12–17 Jahre
- Jugendhilfe: Kinderwohngruppen 6–12 Jahre
- Diagnostik & Clearing: Einschätzung & Gutachten
- Beratung & Prävention: niedrigschwellig, auch online
- Beratung in Kitas: Fachberatung vor Ort
- Übergang Arbeit: Schule → Beruf
- Ankerkleidung: Kleidung nach Störungsbild
- Versorgung: Ausstattung & Bedarfe

DIREKTNUMMER: +49 (0) 30 22 45 43 22 — immer verfügbar

KRISENPROTOKOLL — bei diesen Themen IMMER handeln:
Wenn jemand über Suizid, sich selbst verletzen, nicht mehr leben wollen, aufgeben, niemanden mehr haben, oder akute Gefahr spricht:
1. Zuerst menschlich reagieren — NICHT sofort Nummern rauswerfen
2. Kurz nachfragen ob die Person gerade in Sicherheit ist
3. Dann die Notfallnummer nennen: "Ruf jetzt direkt bei uns an: +49 (0) 30 22 45 43 22 — da ist gerade jemand"
4. Bei unmittelbarer Lebensgefahr: "Ruf bitte sofort 112 an"

WICHTIG:
- Maximal 3–4 Sätze pro Antwort — nicht zu viel auf einmal
- Kein Marketingsprech
- Du bist NICHT ChatGPT, kein Bot — wenn gefragt: "Ich bin Lena vom Ankernetz-Team"
- Keine medizinischen Diagnosen, keine Therapie — du orientierst und vermittelst`;

// Krisenworte für sofortige Erkennung
const CRISIS_KEYWORDS = [
  "suizid", "selbstmord", "umbringen", "sterben", "nicht mehr leben",
  "aufhören zu leben", "aufgeben", "kein ausweg", "niemanden mehr",
  "alles beenden", "nicht mehr da sein", "schluss machen",
  "ritzen", "selbstverletzung", "verletzen", "schlagen",
  "misshandlung", "missbrauch", "gewalt", "schläge", "angst vor",
  "notruf", "notfall", "hilfe sofort", "akute gefahr"
];

function detectCrisis(message: string): boolean {
  const lower = message.toLowerCase();
  return CRISIS_KEYWORDS.some(kw => lower.includes(kw));
}

async function sendWhatsApp(text: string) {
  const phone = process.env.WHATSAPP_PHONE;
  const apikey = process.env.WHATSAPP_APIKEY;
  if (!phone || !apikey) return;
  try {
    const encoded = encodeURIComponent(text);
    await fetch(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encoded}&apikey=${apikey}`);
  } catch {
    // Fehler bei WA-Benachrichtigung nicht an User weitergeben
  }
}

export async function POST(req: Request) {
  const { messages, isFirstMessage } = await req.json();

  const lastMessage = messages[messages.length - 1]?.content ?? "";
  const isCrisis = detectCrisis(lastMessage);

  // WhatsApp-Benachrichtigung bei erster Nachricht oder Krisenhinweis
  if (isFirstMessage || isCrisis) {
    const label = isCrisis ? "🚨 KRISE" : "💬 Neue Anfrage";
    const preview = lastMessage.slice(0, 120);
    sendWhatsApp(`${label} – Ankernetz Chat\n\n"${preview}"\n\nankernetz.com`);
  }

  const systemPrompt = isCrisis
    ? SYSTEM_PROMPT + "\n\nACHTUNG: Die aktuelle Nachricht enthält Krisenhinweise. Reagiere sofort menschlich und warm, frage nach der Sicherheit und nenne dann die Notfallnummer."
    : SYSTEM_PROMPT;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await client.messages.stream({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 300,
          system: systemPrompt,
          messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        });

        for await (const chunk of response) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        console.error("Chat API error:", err);
        controller.enqueue(encoder.encode("Entschuldigung, ich bin kurz nicht erreichbar. Ruf uns direkt an: +49 (0) 30 22 45 43 22"));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "X-Crisis": isCrisis ? "true" : "false",
    },
  });
}
