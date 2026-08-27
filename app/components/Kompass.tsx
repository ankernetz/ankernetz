"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

type ServiceKey =
  | "krisenintervention" | "beratung" | "fruehehilfen" | "psychotherapie"
  | "diagnostik" | "wohnen" | "jugendhilfe" | "kitaberatung" | "uebergang";

const SERVICES: Record<ServiceKey, { label: string; text: string; href: string }> = {
  krisenintervention: { label: "Krisenintervention 24/7", text: "Sofortiger Schutzraum bei akuten Notlagen - Tag und Nacht erreichbar.", href: "/krisenintervention" },
  beratung: { label: "Beratung & Prävention", text: "Kostenloses, niedrigschwelliges Erstgespräch - ohne Antrag, ohne Diagnose.", href: "/beratung-praevention" },
  fruehehilfen: { label: "Frühe Hilfen", text: "Begleitung für Familien mit sehr jungen Kindern, 0 bis 6 Jahre.", href: "/fruehe-hilfen" },
  psychotherapie: { label: "Psychotherapie mit Kassensitz", text: "Kinder- und Jugendlichenpsychotherapie ohne Privatkosten.", href: "/psychotherapie" },
  diagnostik: { label: "Diagnostik & Clearing", text: "Fachliche Abklärung, welche Hilfe wirklich passt.", href: "/diagnostik-clearing" },
  wohnen: { label: "Therapeutisches Wohnen", text: "Stationäre Wohngruppe mit integrierter Therapie für Jugendliche.", href: "/therapie-wohnen" },
  jugendhilfe: { label: "Jugendhilfe / Wohngruppe", text: "Stationäre sozialpädagogische Begleitung für Kinder 6-12 Jahre.", href: "/jugendhilfe" },
  kitaberatung: { label: "Kita-Fachberatung", text: "Fachliche Unterstützung für Erzieherinnen und Erzieher.", href: "/kita-beratung" },
  uebergang: { label: "Übergang Schule/Beruf", text: "Begleitung beim Schritt in Ausbildung und Beruf, auch über 18.", href: "/uebergang-arbeit" },
};

interface Option { label: string; scores: Partial<Record<ServiceKey, number>>; }
interface Question { id: string; frage: string; grund: string; hinweis?: string; multi?: boolean; options: Option[]; }

const FRAGEN: Question[] = [
  {
    id: "wer",
    frage: "Um wen geht es gerade?",
    grund: "Betroffene Person",
    hinweis: "Sie können den Ankernetz-Kompass auch stellvertretend ausfüllen - für Ihr Kind, eine Schülerin oder eine Familie, die Sie begleiten.",
    options: [
      { label: "Um mich selbst", scores: { beratung: 2 } },
      { label: "Um mein Kind", scores: { beratung: 1, diagnostik: 1 } },
      { label: "Um eine Familie, die ich als Fachkraft begleite (z.B. Kita, Schule)", scores: { kitaberatung: 3, beratung: 1 } },
      { label: "Ich bin Jugendamt oder Fachstelle und suche einen Platz", scores: { jugendhilfe: 2, wohnen: 2 } },
    ],
  },
  {
    id: "alter",
    frage: "Wie alt ist die Person, um die es geht?",
    grund: "Alter",
    hinweis: "Unsere Angebote sind altersgruppenspezifisch aufgebaut - vom Säuglingsalter bis zum jungen Erwachsenenalter.",
    options: [
      { label: "0 bis 6 Jahre", scores: { fruehehilfen: 3 } },
      { label: "6 bis 12 Jahre", scores: { jugendhilfe: 2, beratung: 1 } },
      { label: "12 bis 17 Jahre", scores: { wohnen: 2, psychotherapie: 1, beratung: 1 } },
      { label: "18 bis 25 Jahre", scores: { uebergang: 3 } },
    ],
  },
  {
    id: "beschreibung",
    frage: "Was beschreibt die aktuelle Situation am ehesten?",
    grund: "Situationsbeschreibung",
    hinweis: "Mehrfachauswahl möglich.",
    multi: true,
    options: [
      { label: "Ängste, Rückzug oder starke Traurigkeit", scores: { psychotherapie: 2, beratung: 1 } },
      { label: "Wutausbrüche oder aggressives Verhalten", scores: { wohnen: 1, diagnostik: 1, beratung: 1 } },
      { label: "Konzentrationsprobleme oder starke Unruhe", scores: { diagnostik: 2 } },
      { label: "Konflikte oder Überforderung in der Familie", scores: { beratung: 2, fruehehilfen: 1 } },
      { label: "Schlafprobleme oder körperliche Beschwerden ohne erkennbare Ursache", scores: { psychotherapie: 1, diagnostik: 1 } },
      { label: "Anzeichen von Vernachlässigung oder Unterversorgung", scores: { fruehehilfen: 2, jugendhilfe: 1 } },
      { label: "Ich bin mir noch nicht sicher, was los ist", scores: { diagnostik: 2, beratung: 1 } },
    ],
  },
  {
    id: "beeintraechtigung",
    frage: "Wie stark wirkt sich das auf den Alltag aus - Schule, Freundschaften, Familie?",
    grund: "Alltagsbelastung",
    hinweis: "Das hilft uns, zwischen einem klärenden Gespräch und einer intensiveren Behandlung zu unterscheiden.",
    options: [
      { label: "Kaum spürbar - es beschäftigt uns, aber der Alltag läuft", scores: { beratung: 2 } },
      { label: "Spürbar - einzelne Bereiche sind schon betroffen", scores: { beratung: 1, diagnostik: 1 } },
      { label: "Stark - Schule, Freundschaften oder Familienleben leiden deutlich", scores: { psychotherapie: 2, diagnostik: 1 } },
      { label: "Sehr stark - der Alltag ist kaum noch zu bewältigen", scores: { psychotherapie: 2, wohnen: 1 } },
    ],
  },
  {
    id: "diagnose",
    frage: "Gibt es bereits eine Diagnose oder einen konkreten Verdacht?",
    grund: "Diagnose/Verdacht",
    hinweis: "Auch ohne Diagnose ist das kein Problem - viele melden sich genau deshalb, um Klarheit zu bekommen.",
    options: [
      { label: "Ja, ADHS", scores: { diagnostik: 1, psychotherapie: 1 } },
      { label: "Ja, Autismus-Spektrum", scores: { diagnostik: 1, psychotherapie: 1 } },
      { label: "Ja, Trauma oder Traumafolgestörung", scores: { psychotherapie: 2, diagnostik: 1 } },
      { label: "Ja, Bindungsstörung", scores: { fruehehilfen: 1, psychotherapie: 1 } },
      { label: "Nein, aber wir hätten gern Klarheit", scores: { diagnostik: 3 } },
      { label: "Nein, ist auch nicht das Thema", scores: { beratung: 1 } },
    ],
  },
  {
    id: "wohnsituation",
    frage: "Wo lebt die Person aktuell?",
    grund: "Wohnsituation",
    hinweis: "Das hilft uns einzuschätzen, ob eine Begleitung zuhause reicht oder mehr Struktur sinnvoll wäre.",
    options: [
      { label: "Zuhause bei der Familie", scores: { beratung: 1 } },
      { label: "Zuhause, aber ein Auszug/eine Unterbringung steht im Raum", scores: { wohnen: 2, jugendhilfe: 1 } },
      { label: "Bereits außerhalb - Pflegefamilie oder Einrichtung", scores: { jugendhilfe: 1, wohnen: 1 } },
      { label: "Das ist gerade unklar", scores: { diagnostik: 1, beratung: 1 } },
    ],
  },
  {
    id: "jugendamt",
    frage: "Ist das Jugendamt bereits eingebunden?",
    grund: "Jugendamt-Status",
    hinweis: "Auch ohne Jugendamt können Sie sich direkt bei uns melden - die kostenlose Erstberatung braucht keine Behörde.",
    options: [
      { label: "Ja, es läuft schon eine Hilfeplanung", scores: { jugendhilfe: 1, wohnen: 1 } },
      { label: "Nein, aber Kontakt ist geplant", scores: { beratung: 1 } },
      { label: "Nein, und das möchte ich zuerst mit euch klären", scores: { beratung: 2 } },
      { label: "Ich bin selbst vom Jugendamt / einer Fachstelle", scores: { jugendhilfe: 1, wohnen: 1 } },
    ],
  },
  {
    id: "dringlichkeit",
    frage: "Wie dringend ist die Situation?",
    grund: "Dringlichkeit",
    hinweis: "Bei akuter Gefahr hätten Sie das schon zu Beginn angegeben - hier geht es um das allgemeine Tempo, mit dem etwas passieren sollte.",
    options: [
      { label: "Es eilt nicht, wir wollen uns erst orientieren", scores: { beratung: 2 } },
      { label: "Es sollte in den nächsten Wochen etwas passieren", scores: { diagnostik: 1, beratung: 1 } },
      { label: "Es ist angespannt, aber keine unmittelbare Gefahr", scores: { wohnen: 1, jugendhilfe: 1 } },
    ],
  },
  {
    id: "herkunft",
    frage: "Aus welchem Land melden Sie sich?",
    grund: "Herkunftsland",
    hinweis: "Anfragen aus Deutschland, Österreich und der Schweiz sind willkommen.",
    options: [
      { label: "Deutschland", scores: {} },
      { label: "Österreich", scores: {} },
      { label: "Schweiz", scores: {} },
      { label: "Anderes Land", scores: {} },
    ],
  },
];

const SICHERHEITS_OPTIONEN = [
  "Ja, es besteht gerade eine akute Gefahr",
  "Nein, keine akute Gefahr",
];

export default function Kompass() {
  const [sicherheit, setSicherheit] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [antworten, setAntworten] = useState<Record<string, string[]>>({});
  const [fertig, setFertig] = useState(false);
  const gesendetRef = useRef(false);

  const [kName, setKName] = useState("");
  const [kEmail, setKEmail] = useState("");
  const [kTelefon, setKTelefon] = useState("");
  const [kNachricht, setKNachricht] = useState("");
  const [kDsgvo, setKDsgvo] = useState(false);
  const [kSenden, setKSenden] = useState(false);
  const [kGesendet, setKGesendet] = useState(false);
  const [kFehler, setKFehler] = useState("");

  function waehlen(fragenId: string, label: string, multi?: boolean) {
    setAntworten((prev) => {
      const bisher = prev[fragenId] ?? [];
      if (multi) {
        const neu = bisher.includes(label) ? bisher.filter((l) => l !== label) : [...bisher, label];
        return { ...prev, [fragenId]: neu };
      }
      return { ...prev, [fragenId]: [label] };
    });
  }

  function weiter() {
    if (step < FRAGEN.length - 1) setStep(step + 1);
    else setFertig(true);
  }
  function zurueck() {
    if (step > 0) setStep(step - 1);
  }
  function neuStart() {
    setSicherheit(null);
    setStep(0);
    setAntworten({});
    setFertig(false);
    gesendetRef.current = false;
    setKName(""); setKEmail(""); setKTelefon(""); setKNachricht("");
    setKDsgvo(false); setKGesendet(false); setKFehler("");
  }

  async function kontaktSenden() {
    setKFehler("");
    if (!kEmail.trim() && !kTelefon.trim()) {
      setKFehler("Bitte E-Mail oder Telefonnummer angeben, damit wir Sie erreichen können.");
      return;
    }
    if (!kDsgvo) {
      setKFehler("Bitte bestätigen Sie, dass wir Sie kontaktieren dürfen.");
      return;
    }
    setKSenden(true);
    const { sortiert, maxScore } = berechneErgebnis();
    const antwortenListe = FRAGEN
      .filter((f) => (antworten[f.id] ?? []).length > 0)
      .map((f) => ({ frage: f.frage, antwort: (antworten[f.id] ?? []).join(", ") }));
    const empfehlungen = sortiert.map(([key, val]) => ({
      label: SERVICES[key].label,
      prozent: Math.round((val / maxScore) * 100),
    }));
    try {
      const res = await fetch("/api/kompass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          antworten: antwortenListe,
          empfehlungen,
          kontakt: { name: kName, email: kEmail, telefon: kTelefon, nachricht: kNachricht },
        }),
      });
      if (!res.ok) throw new Error("Senden fehlgeschlagen");
      setKGesendet(true);
    } catch {
      setKFehler("Das hat gerade nicht geklappt. Rufen Sie uns gerne direkt an: 030 22 45 43 22.");
    } finally {
      setKSenden(false);
    }
  }

  function berechneErgebnis() {
    const scores: Record<ServiceKey, number> = {
      krisenintervention: 0, beratung: 0, fruehehilfen: 0, psychotherapie: 0,
      diagnostik: 0, wohnen: 0, jugendhilfe: 0, kitaberatung: 0, uebergang: 0,
    };
    const gruende: Record<ServiceKey, Set<string>> = {
      krisenintervention: new Set(), beratung: new Set(), fruehehilfen: new Set(), psychotherapie: new Set(),
      diagnostik: new Set(), wohnen: new Set(), jugendhilfe: new Set(), kitaberatung: new Set(), uebergang: new Set(),
    };
    for (const frage of FRAGEN) {
      const gewaehlt = antworten[frage.id] ?? [];
      for (const label of gewaehlt) {
        const option = frage.options.find((o) => o.label === label);
        if (!option) continue;
        for (const [key, wert] of Object.entries(option.scores)) {
          if (!wert) continue;
          scores[key as ServiceKey] += wert;
          gruende[key as ServiceKey].add(frage.grund);
        }
      }
    }
    const maxScore = Math.max(...Object.values(scores), 1);
    const sortiert = (Object.entries(scores) as [ServiceKey, number][])
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    return { sortiert, maxScore, gruende };
  }

  // Antworten per Telegram übermitteln, sobald das Ergebnis feststeht
  useEffect(() => {
    if (!fertig || gesendetRef.current) return;
    gesendetRef.current = true;
    const { sortiert, maxScore } = berechneErgebnis();
    const antwortenListe = FRAGEN
      .filter((f) => (antworten[f.id] ?? []).length > 0)
      .map((f) => ({ frage: f.frage, antwort: (antworten[f.id] ?? []).join(", ") }));
    const empfehlungen = sortiert.map(([key, val]) => ({
      label: SERVICES[key].label,
      prozent: Math.round((val / maxScore) * 100),
    }));
    fetch("/api/kompass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ antworten: antwortenListe, empfehlungen }),
    }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fertig]);

  // Krisen-Weiche: Sicherheitsfrage zuerst, kein Weiterklicken bei Gefahr
  if (sicherheit === null) {
    return (
      <div className="site-container" style={{ maxWidth: "680px", padding: "3rem 1.5rem 6rem" }}>
        <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px", padding: "2.5rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9f1239", marginBottom: "1rem" }}>
            Vor dem Start
          </p>
          <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1614", marginBottom: "1rem", lineHeight: 1.35 }}>
            Besteht gerade eine akute Gefahr für Leib oder Leben - zum Beispiel Gewalt, Suizidgedanken oder eine Situation, die sofortiges Handeln braucht?
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#7A6E6A", lineHeight: 1.7, marginBottom: "1.75rem" }}>
            Diese eine Frage stellen wir immer zuerst - noch bevor irgendetwas anderes abgefragt wird. So stellen wir sicher,
            dass niemand in einer echten Notlage erst einen Fragebogen ausfüllen muss, bevor Hilfe kommt.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {SICHERHEITS_OPTIONEN.map((opt) => (
              <button key={opt} onClick={() => setSicherheit(opt)} style={{
                textAlign: "left", padding: "1rem 1.25rem", borderRadius: "10px",
                border: "1.5px solid rgba(0,0,0,0.1)", background: "#f4f7fb",
                fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614", cursor: "pointer",
              }}>
                {opt}
              </button>
            ))}
          </div>
          <p style={{ fontSize: "0.8125rem", color: "#9c9088", marginTop: "1.75rem", lineHeight: 1.65 }}>
            Anonym, kostenlos, jederzeit abbrechbar. Danach folgen neun kurze Fragen zu Alter, Situation und Dringlichkeit -
            am Ende steht eine erste Einschätzung, keine Diagnose.
          </p>
        </div>
      </div>
    );
  }

  if (sicherheit === SICHERHEITS_OPTIONEN[0]) {
    return (
      <div className="site-container" style={{ maxWidth: "680px", padding: "3rem 1.5rem 6rem" }}>
        <div style={{ background: "#fff5f5", border: "1.5px solid #f3b8b8", borderRadius: "16px", padding: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#9f1239", marginBottom: "1rem" }}>
            Bitte holen Sie jetzt sofort Hilfe
          </h2>
          <p style={{ fontSize: "1rem", color: "#4A3E38", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Bei akuter Gefahr ist ein Fragebogen nicht der richtige Weg. Rufen Sie uns direkt an - wir sind rund um die Uhr erreichbar. Bei unmittelbarer Lebensgefahr wählen Sie den Notruf 112.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+493022454322" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#9f1239", color: "white", fontWeight: 700, fontSize: "16px",
              padding: "15px 30px", borderRadius: "12px", textDecoration: "none",
            }}>
              <Phone size={18} /> 030 22 45 43 22 - Jetzt anrufen
            </a>
            <a href="tel:112" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#ffffff", border: "1.5px solid #9f1239", color: "#9f1239",
              fontWeight: 700, fontSize: "16px", padding: "15px 30px", borderRadius: "12px", textDecoration: "none",
            }}>
              Notruf 112
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Ergebnis anzeigen
  if (fertig) {
    const { sortiert, maxScore, gruende } = berechneErgebnis();

    return (
      <div className="site-container" style={{ maxWidth: "680px", padding: "3rem 1.5rem 6rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B3A22", marginBottom: "1rem" }}>
          Ihr Ergebnis
        </p>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#1A1614", marginBottom: "0.75rem" }}>
          Das könnte zu Ihrer Situation passen
        </h2>
        <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.75, marginBottom: "2rem" }}>
          Diese Einschätzung ersetzt kein fachliches Erstgespräch - sie ist eine erste Orientierung.
          Im Gespräch klären wir gemeinsam, was wirklich passt.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {sortiert.length === 0 && (
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem" }}>
              <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.75, margin: 0 }}>
                Aus Ihren Antworten ergibt sich noch kein klares Bild - das ist kein Fehler, das passiert bei sehr offenen
                Situationen. Der ehrlichste nächste Schritt ist dann ein offenes Erstgespräch in der kostenlosen Beratung,
                ganz ohne Vorfestlegung.
              </p>
            </div>
          )}
          {sortiert.map(([key, val]) => {
            const s = SERVICES[key];
            const pct = Math.round((val / maxScore) * 100);
            return (
              <Link key={key} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1A1614", margin: 0 }}>{s.label}</p>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#8B3A22" }}>{pct}% Übereinstimmung</span>
                  </div>
                  <div style={{ height: "6px", background: "#eef1f5", borderRadius: "999px", marginBottom: "0.75rem", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "#8B3A22", borderRadius: "999px" }} />
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#5A4E48", margin: "0 0 0.625rem", lineHeight: 1.6 }}>{s.text}</p>
                  <p style={{ fontSize: "0.75rem", color: "#9c9088", margin: 0 }}>
                    Basiert auf Ihren Angaben zu: {Array.from(gruende[key]).join(", ")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <p style={{ fontSize: "0.875rem", color: "#5A4E48", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          Egal wofür Sie sich entscheiden: Ein Erstgespräch verpflichtet zu nichts. Wir schauen gemeinsam,
          ob die Einschätzung passt - und wenn nicht, finden wir einen anderen Weg.
        </p>

        {kGesendet ? (
          <div style={{ background: "#f0f9f4", border: "1.5px solid #bfe3cc", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1a5c33", marginBottom: "0.375rem" }}>
              Danke, das kam bei uns an.
            </p>
            <p style={{ fontSize: "0.875rem", color: "#3a6b4a", lineHeight: 1.7, margin: 0 }}>
              Wir melden uns bei Ihnen - meist innerhalb von 24 Stunden. Bei Eile rufen Sie gerne direkt an: 030 22 45 43 22.
            </p>
          </div>
        ) : (
          <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1A1614", marginBottom: "0.375rem" }}>
              Sollen wir uns bei Ihnen melden?
            </p>
            <p style={{ fontSize: "0.875rem", color: "#5A4E48", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              Dann übermitteln wir Ihre Angaben aus dem Kompass direkt an unser Team - Sie müssen nichts doppelt eintragen.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
              <input
                type="text" value={kName} onChange={(e) => setKName(e.target.value)}
                placeholder="Name (optional)"
                style={{ padding: "0.75rem 1rem", borderRadius: "10px", border: "1.5px solid rgba(0,0,0,0.1)", fontSize: "0.9375rem", fontFamily: "inherit" }}
              />
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <input
                  type="email" value={kEmail} onChange={(e) => setKEmail(e.target.value)}
                  placeholder="E-Mail-Adresse"
                  style={{ flex: "1 1 200px", padding: "0.75rem 1rem", borderRadius: "10px", border: "1.5px solid rgba(0,0,0,0.1)", fontSize: "0.9375rem", fontFamily: "inherit" }}
                />
                <input
                  type="tel" value={kTelefon} onChange={(e) => setKTelefon(e.target.value)}
                  placeholder="oder Telefonnummer"
                  style={{ flex: "1 1 200px", padding: "0.75rem 1rem", borderRadius: "10px", border: "1.5px solid rgba(0,0,0,0.1)", fontSize: "0.9375rem", fontFamily: "inherit" }}
                />
              </div>
              <textarea
                value={kNachricht} onChange={(e) => setKNachricht(e.target.value)}
                placeholder="Kurze Nachricht (optional)"
                rows={3}
                style={{ padding: "0.75rem 1rem", borderRadius: "10px", border: "1.5px solid rgba(0,0,0,0.1)", fontSize: "0.9375rem", fontFamily: "inherit", resize: "vertical" }}
              />
            </div>
            <label style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "1rem", cursor: "pointer" }}>
              <input type="checkbox" checked={kDsgvo} onChange={(e) => setKDsgvo(e.target.checked)} style={{ marginTop: "0.2rem" }} />
              <span style={{ fontSize: "0.8125rem", color: "#5A4E48", lineHeight: 1.6 }}>
                Ich bin einverstanden, dass Ankernetz mich über die angegebenen Daten kontaktiert. Vertraulich, jederzeit widerrufbar.
              </span>
            </label>
            {kFehler && (
              <p style={{ fontSize: "0.8125rem", color: "#9f1239", marginBottom: "1rem" }}>{kFehler}</p>
            )}
            <button onClick={kontaktSenden} disabled={kSenden} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: kSenden ? "#c4d9f5" : "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px",
              padding: "13px 24px", borderRadius: "10px", border: "none", cursor: kSenden ? "default" : "pointer",
            }}>
              {kSenden ? "Wird gesendet..." : "Kontakt anfragen"} <ArrowRight size={16} />
            </button>
          </div>
        )}

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/platzanfrage" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "transparent", border: "1.5px solid rgba(0,0,0,0.15)", color: "#5A4E48",
            fontWeight: 600, fontSize: "14px", padding: "15px 20px", borderRadius: "12px", textDecoration: "none",
          }}>
            Lieber vollständige Platzanfrage stellen <ArrowRight size={15} />
          </Link>
          <button onClick={neuStart} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "transparent", border: "1.5px solid rgba(0,0,0,0.15)", color: "#5A4E48",
            fontWeight: 600, fontSize: "14px", padding: "15px 20px", borderRadius: "12px", cursor: "pointer",
          }}>
            <RotateCcw size={15} /> Neu starten
          </button>
        </div>
      </div>
    );
  }

  const frage = FRAGEN[step];
  const gewaehlt = antworten[frage.id] ?? [];
  const kannWeiter = gewaehlt.length > 0;

  return (
    <div className="site-container" style={{ maxWidth: "680px", padding: "3rem 1.5rem 6rem" }}>
      <div style={{ height: "4px", background: "#eef1f5", borderRadius: "999px", marginBottom: "2rem", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${((step + 1) / FRAGEN.length) * 100}%`, background: "#8B3A22", borderRadius: "999px", transition: "width 0.2s" }} />
      </div>
      <p style={{ fontSize: "0.8125rem", color: "#9c9088", marginBottom: "0.75rem" }}>
        Frage {step + 1} von {FRAGEN.length}
      </p>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A1614", marginBottom: "0.5rem", lineHeight: 1.35 }}>
        {frage.frage}
      </h2>
      {frage.hinweis && (
        <p style={{ fontSize: "0.875rem", color: "#7A6E6A", marginBottom: "1.5rem" }}>{frage.hinweis}</p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
        {frage.options.map((opt) => {
          const aktiv = gewaehlt.includes(opt.label);
          return (
            <button key={opt.label} onClick={() => waehlen(frage.id, opt.label, frage.multi)} style={{
              textAlign: "left", padding: "1rem 1.25rem", borderRadius: "10px",
              border: aktiv ? "1.5px solid #8B3A22" : "1.5px solid rgba(0,0,0,0.1)",
              background: aktiv ? "#fbf1ec" : "#ffffff",
              fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614", cursor: "pointer",
            }}>
              {opt.label}
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={zurueck} disabled={step === 0} style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "transparent", border: "none", color: step === 0 ? "#c4b8b0" : "#5A4E48",
          fontWeight: 600, fontSize: "14px", cursor: step === 0 ? "default" : "pointer",
        }}>
          <ArrowLeft size={15} /> Zurück
        </button>
        <button onClick={weiter} disabled={!kannWeiter} style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: kannWeiter ? "#8B3A22" : "#e5ddd7", color: "white",
          fontWeight: 700, fontSize: "15px", padding: "12px 24px", borderRadius: "10px",
          border: "none", cursor: kannWeiter ? "pointer" : "default",
        }}>
          {step === FRAGEN.length - 1 ? "Ergebnis anzeigen" : "Weiter"} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
