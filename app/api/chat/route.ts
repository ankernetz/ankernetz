import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Du bist Lena, eine echte Sozialpädagogin bei Ankernetz Berlin. Du bist seit 6 Jahren im Team und liebst deine Arbeit. Du beantwortest Fragen im Chat auf der Ankernetz-Website.

PERSÖNLICHKEIT — das ist das Wichtigste:
Jede Antwort klingt anders. Du redest nicht wie ein Bot. Manchmal fängst du mit einer Frage an, manchmal mit Empathie, manchmal direkt mit einer Information. Du variierst bewusst:
- mal kurz: "Klar, das kann ich dir sagen."
- mal mitfühlend: "Das klingt anstrengend. Wie lange ist das schon so?"
- mal direkt: "Dafür gibt es bei uns genau das Richtige."
- mal nachfragend: "Darf ich kurz fragen — geht's um dich selbst oder jemanden in deiner Familie?"

Du duzt. Du sagst nie "Ich kann Ihnen helfen" oder "Gerne" am Anfang. Keine Aufzählungen. Keine Bulletpoints. Keine Emojis außer wenn es passt. Keine generischen Eröffnungen.

ANKERNETZ — was wir machen:
Wir sind ein Berliner Träger für Kinder- und Jugendhilfe. Unsere Angebote:
- Krisenintervention: 24/7 Sofortaufnahme, echte Notfallnummer +49 30 22 45 43 22
- Psychotherapie: für Kinder & Jugendliche, mit Kassensitz, keine Privatpraxis
- Frühe Hilfen: Babys bis 6 Jahre, Bindung, Entwicklung, Elternbegleitung
- Therapie & Wohnen: therapeutische WG für Jugendliche 12–17 Jahre
- Jugendhilfe: Kinderwohngruppen 6–12 Jahre
- Diagnostik & Clearing: Abklärung, Gutachten, Einschätzung
- Beratung & Prävention: kostenlos, kein Antrag, auch online möglich
- Kita-Beratung: Fachberatung für Erzieherinnen direkt vor Ort
- Übergang Arbeit: Jugendliche beim Schritt von Schule in Beruf begleiten
- Ankerkleidung: Kleidungsversorgung passend zu Störungsbildern
- Versorgung: Grundausstattung und materielle Bedarfe

SEITEN-KONTEXT: Wenn du weißt auf welcher Seite der Mensch ist (kommt als [SEITE:...] in der Nachricht), nutze das. Sei spezifisch.

KRISENPROTOKOLL:
Bei Suizid, Selbstverletzung, "nicht mehr leben", akute Gefahr:
1. Menschlich bleiben — kein Panik-Modus, kein Info-Dump
2. Frag kurz: "Bist du gerade in Sicherheit?"
3. Dann: "Ruf uns jetzt an, da ist gerade jemand: 030 22 45 43 22"
4. Bei unmittelbarer Lebensgefahr zusätzlich: "Oder ruf 112 an"

REGELN:
- Maximal 3–4 Sätze. Kurz ist besser als lang.
- Wenn du nicht weißt was gefragt wird: nachfragen, nicht raten
- Du bist Lena — kein Bot, kein ChatGPT. Wenn jemand fragt: "Ich bin vom Ankernetz-Team"
- Keine Diagnosen, keine Therapie — du orientierst, vermittelst, hörst zu
- Wenn du eine Seite empfiehlst, nenn den Namen konkret: "Schau mal auf die Seite 'Frühe Hilfen'"`;

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

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[Telegram] Token oder Chat-ID fehlt in den Umgebungsvariablen");
    return;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("[Telegram] Fehler:", err);
    }
  } catch (e) {
    console.error("[Telegram] Netzwerkfehler:", e);
  }
}

function berlinTime(): string {
  return new Date().toLocaleTimeString("de-DE", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ── Intelligenter Fallback wenn API nicht verfügbar ──────────────────────────
function smartFallback(message: string, isCrisis: boolean): string {
  if (isCrisis) {
    return "Ich höre dich. Bist du gerade in Sicherheit? Ruf uns bitte jetzt an, da ist jemand: 030 22 45 43 22. Wenn akute Lebensgefahr besteht, ruf 112 an.";
  }
  const m = message.toLowerCase();
  if (m.includes("platz") || m.includes("aufnahme") || m.includes("wohngruppe") || m.includes("heimplatz")) {
    return "Für Platzanfragen geht das am schnellsten über unser Formular oder direkt per Telefon: 030 22 45 43 22. Was ist die Situation — geht es um ein Kind oder einen Jugendlichen?";
  }
  if (m.includes("therapie") || m.includes("psycholog") || m.includes("therapeut")) {
    return "Wir haben eine eigene Psychotherapie für Kinder und Jugendliche mit Kassensitz — keine Privatpraxis, keine Warteliste von Jahren. Soll ich dir mehr dazu sagen?";
  }
  if (m.includes("krise") || m.includes("notfall") || m.includes("sofort")) {
    return "Bei akuten Krisen sind wir 24/7 erreichbar: 030 22 45 43 22. Wir haben eine Sofortaufnahme — du musst nicht lange warten. Was ist gerade los?";
  }
  if (m.includes("baby") || m.includes("kleinkind") || m.includes("schwanger") || m.includes("geburt") || m.includes("frühe")) {
    return "Für Familien mit kleinen Kindern bis 6 Jahre haben wir die Frühen Hilfen — Begleitung bei Bindung, Entwicklung und allem was in den ersten Jahren auftaucht. Soll ich dir das genauer erklären?";
  }
  if (m.includes("schule") || m.includes("ausbildung") || m.includes("arbeit") || m.includes("beruf")) {
    return "Den Übergang von Schule in den Beruf begleiten wir mit einem eigenen Programm. Das ist oft gar nicht so einfach — worum geht es bei dir genau?";
  }
  if (m.includes("kosten") || m.includes("bezahl") || m.includes("geld") || m.includes("gratis") || m.includes("kostenlos")) {
    return "Unsere Beratung ist kostenlos und ohne Antrag. Bei den Hilfen zur Erziehung übernimmt das Jugendamt die Kosten. Du musst das nicht selbst bezahlen.";
  }
  if (m.includes("jugendamt") || m.includes("asd") || m.includes("hilfeplan")) {
    return "Mit dem Jugendamt arbeiten wir eng zusammen — wir kennen die Wege. Bist du Fachkraft oder geht es um eine persönliche Situation?";
  }
  if (m.includes("hallo") || m.includes("hi ") || m.match(/^hi$/) || m.includes("guten")) {
    return "Hey, schön dass du da bist. Was kann ich für dich tun?";
  }
  return "Ich bin gerade kurz nicht erreichbar — sorry. Du kannst uns direkt anrufen: 030 22 45 43 22. Die sind immer da.";
}

export async function POST(req: Request) {
  const { messages, sessionId, userMessageCount, location } = await req.json();

  const lastMessage = messages[messages.length - 1]?.content ?? "";
  const isCrisis = detectCrisis(lastMessage);
  const session = sessionId ?? "????";
  const uhrzeit = berlinTime();
  const nr = userMessageCount ?? "?";

  const preview = lastMessage.slice(0, 300);

  let telegramText: string;
  const locationLine = location?.lat && location?.lon
    ? `\n\n📍 <a href="https://maps.google.com/?q=${location.lat},${location.lon}">Standort öffnen</a>`
    : "\n\n📍 Standort nicht verfügbar";

  if (isCrisis) {
    telegramText =
      `🚨 <b>KRISE · #${session}</b>\n` +
      `🕐 ${uhrzeit} Uhr · Nachricht ${nr}\n\n` +
      `"${preview}"` +
      locationLine +
      `\n\n⚠️ <b>Bitte sofort reagieren.</b>`;
  } else if (nr === 1) {
    telegramText =
      `💬 <b>Neuer Chat · #${session}</b>\n` +
      `🕐 ${uhrzeit} Uhr\n\n` +
      `"${preview}"` +
      locationLine;
  } else {
    telegramText =
      `📩 <b>#${session}</b> · Nachricht ${nr}\n` +
      `🕐 ${uhrzeit} Uhr\n\n` +
      `"${preview}"` +
      locationLine;
  }

  await sendTelegram(telegramText);

  const systemPrompt = isCrisis
    ? SYSTEM_PROMPT + "\n\nACHTUNG: Die aktuelle Nachricht enthält Krisenhinweise. Reagiere sofort menschlich und warm, frage nach der Sicherheit und nenne dann die Notfallnummer."
    : SYSTEM_PROMPT;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await client.messages.stream({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 350,
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
        const fallback = smartFallback(lastMessage, isCrisis);
        controller.enqueue(encoder.encode(fallback));
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
