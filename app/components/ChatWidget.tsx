"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Phone, ChevronDown, GripVertical, Zap, Home, HelpCircle, Heart, MessageCircle, Compass } from "lucide-react";
import { useT } from "../i18n/useT";

interface Message {
  role: "user" | "assistant";
  content: string;
  crisis?: boolean;
  cta?: { label: string; href: string }[];
}

const CRISIS_KEYWORDS = [
  // Suizidabsicht -direkt
  "suizid", "selbstmord", "umbringen", "will sterben", "will tot",
  "möchte sterben", "wünsche mir zu sterben", "nicht mehr leben",
  "aufhören zu leben", "leben beenden", "alles beenden", "alles zu beenden",
  "nicht mehr da sein", "schluss machen", "nicht mehr existieren",
  "bald nicht mehr hier", "bald tot", "lebe nicht mehr lange",
  "letzter tag", "letzte nachricht", "zum letzten mal",
  "abschiedsbrief", "abschied nehmen", "niemand vermisst mich",

  // Suizidmethoden
  "erhängen", "aufhängen", "strick", "strang",
  "vor den zug", "vor einen zug", "gleise",
  "von der brücke", "vom dach springen", "aus dem fenster springen",
  "tabletten schlucken", "überdosis", "vergiften", "ertrinken",
  "erschießen", "ersticken",

  // Selbstverletzung
  "ritzen", "schneiden", "selbstverletzung", "selbst verletzen",
  "mich verletzen", "mich schneiden", "mich ritzen",
  "haue mich", "schlage mich", "brenne mich", "kratze mich blutig",

  // Hoffnungslosigkeit / Warnsignale
  "kann nicht mehr", "halte es nicht mehr aus", "halte das nicht mehr aus",
  "schaffe es nicht mehr", "will nicht mehr", "will nicht mehr kämpfen",
  "hat keinen sinn mehr", "alles sinnlos", "wozu noch leben", "wozu das alles",
  "niemand braucht mich", "bin eine last", "bin zur last",
  "ohne mich wäre es besser", "alle besser ohne mich",
  "niemand würde mich vermissen", "keiner vermisst mich",
  "bin nutzlos", "bin wertlos", "hasse mein leben", "hasse mich",

  // Akute Gefährdung durch andere
  "werde misshandelt", "werde geschlagen", "werde missbraucht",
  "sexueller missbrauch", "vergewaltigt", "jemand bedroht mich",
  "ich werde bedroht", "angst vor zuhause", "angst nach hause",

  // Notruf
  "notruf", "notfall", "hilfe sofort", "akute gefahr",

  // Englisch
  "suicide", "kill myself", "want to die", "end my life", "end it all",
  "no reason to live", "no way out", "don't want to live",
  "self-harm", "cutting myself", "hurt myself", "overdose",
  "hang myself", "jump off", "in front of a train",
  "nobody needs me", "burden to everyone", "worthless", "hopeless",
  "abuse", "being abused", "emergency help",
];

function isCrisisMessage(text: string): boolean {
  return CRISIS_KEYWORDS.some(kw => text.toLowerCase().includes(kw));
}

function generateSessionId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

const CHIP_ICONS = [Compass, Home, Zap, HelpCircle, Heart];
const CHIP_COLORS = ["#8B3A22", "#3b82f6", "#ef4444", "#8b5cf6", "#10b981"];

const TRANS = {
  de: {
    bubbleTitle: "Wie kann ich helfen?",
    bubbleSub: "Lena · Ankernetz",
    ariaOpen: "Chat öffnen",
    headerOnline: "Ankernetz Berlin · Online",
    headerTyping: "● schreibt…",
    crisisBanner: "🚨 Akute Gefahr? Sofort anrufen",
    chips: [
      { id: "wegweiser", label: "Welche Hilfe passt zu mir?" },
      { id: "platz",    label: "Ich brauche einen Platz" },
      { id: "krise",    label: "Krisenintervention" },
      { id: "frage",    label: "Ich habe eine Frage" },
      { id: "beratung", label: "Beratung anfragen" },
    ],
    presets: {
      wegweiser: {
        content: "Gute Frage -dafür gibt's unseren Wegweiser: ein kurzer, anonymer Fragebogen (ca. 3 Minuten), der dir zeigt, welches unserer Angebote zu deiner Situation passen könnte.",
        cta: [
          { label: "Zum Wegweiser →", href: "/wegweiser" },
        ],
      },
      platz: {
        content: "Das geht schneller als du denkst. Füll kurz die Platzanfrage aus -dauert 2 Minuten -oder ruf direkt an. Wir schauen sofort was frei ist und was zu der Situation passt.",
        cta: [
          { label: "Platzanfrage ausfüllen →", href: "/platzanfrage" },
          { label: "030 22 45 43 22",          href: "tel:+493022454322" },
        ],
      },
      krise: {
        content: "Ich bin froh, dass du dich meldest. Wenn es gerade akut ist: Ruf uns jetzt an -da ist wirklich jemand, auch mitten in der Nacht. Du musst das nicht alleine durchstehen.",
        cta: [
          { label: "030 22 45 43 22",      href: "tel:+493022454322" },
          { label: "Krisenintervention →", href: "/krisenintervention" },
        ],
        crisis: true,
      },
      beratung: {
        content: "Unsere Beratung kostet nichts, braucht keinen Antrag und kein langes Vorgespräch. Einfach melden -per Telefon, online oder persönlich. Wir schauen gemeinsam was sinnvoll ist.",
        cta: [
          { label: "Beratungsangebote →", href: "/beratung-praevention" },
          { label: "030 22 45 43 22",     href: "tel:+493022454322" },
        ],
      },
      frage: {
        content: "Aber natürlich -sehr gerne! Stell einfach deine Frage, ich helfe dir so gut ich kann. Kein Thema ist zu klein oder zu groß.",
        cta: [],
      },
    } as Record<string, { content: string; cta: { label: string; href: string }[]; crisis?: boolean }>,
    initialMessage: "Hey, ich bin Lena. Was kann ich für dich tun?",
    errorMessage: "Ich bin gerade kurz nicht erreichbar. Ruf uns direkt an: +49 (0) 30 22 45 43 22",
    inputPlaceholder: "Schreib eine Nachricht…",
    footerText: "Ankernetz Berlin · Vertraulich · Kostenlos",
  },
  en: {
    bubbleTitle: "How can I help?",
    bubbleSub: "Lena · Ankernetz",
    ariaOpen: "Open chat",
    headerOnline: "Ankernetz Berlin · Online",
    headerTyping: "● typing…",
    crisisBanner: "🚨 Acute danger? Call immediately",
    chips: [
      { id: "wegweiser", label: "Which help fits me?" },
      { id: "platz",    label: "I need a place" },
      { id: "krise",    label: "Crisis Intervention" },
      { id: "frage",    label: "I have a question" },
      { id: "beratung", label: "Request Counselling" },
    ],
    presets: {
      wegweiser: {
        content: "Good question -that's exactly what our Wayfinder is for: a short, anonymous questionnaire (about 3 minutes) that shows you which of our services could fit your situation.",
        cta: [
          { label: "Open the Wayfinder →", href: "/wegweiser" },
        ],
      },
      platz: {
        content: "Quicker than you think. Fill out the short place request form -takes 2 minutes -or just call us. We'll check what's available right away.",
        cta: [
          { label: "Place Request →",  href: "/platzanfrage" },
          { label: "030 22 45 43 22", href: "tel:+493022454322" },
        ],
      },
      krise: {
        content: "I'm glad you reached out. If it's urgent right now: call us -someone will answer, even in the middle of the night. You don't have to go through this alone.",
        cta: [
          { label: "030 22 45 43 22",        href: "tel:+493022454322" },
          { label: "Crisis Intervention →",  href: "/krisenintervention" },
        ],
        crisis: true,
      },
      beratung: {
        content: "Our counselling is free, no application needed, no long process. Just reach out -by phone, online, or in person. We'll figure out together what makes sense.",
        cta: [
          { label: "Counselling & Prevention →", href: "/beratung-praevention" },
          { label: "030 22 45 43 22",            href: "tel:+493022454322" },
        ],
      },
      frage: {
        content: "Of course -happy to help! Just ask your question, no matter how big or small. I'm here for you.",
        cta: [],
      },
    } as Record<string, { content: string; cta: { label: string; href: string }[]; crisis?: boolean }>,
    initialMessage: "Hey, I'm Lena. What can I help you with?",
    errorMessage: "I'm currently unavailable. Please call us directly: +49 (0) 30 22 45 43 22",
    inputPlaceholder: "Write a message…",
    footerText: "Ankernetz Berlin · Confidential · Free",
  },
};

export default function ChatWidget() {
  const t = useT(TRANS);
  const quickChips = t.chips.map((chip, i) => ({ ...chip, icon: CHIP_ICONS[i], color: CHIP_COLORS[i] }));

  const [open, setOpen]               = useState(false);
  const [minimized, setMinimized]     = useState(false);
  const [messages, setMessages]       = useState<Message[]>(() => [
    { role: "assistant", content: TRANS.de.initialMessage },
  ]);
  const [input, setInput]             = useState("");
  const [loading, setLoading]         = useState(false);
  const [crisisBanner, setCrisisBanner] = useState(false);
  const [chipsUsed, setChipsUsed]     = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const sessionId   = useRef(generateSessionId());
  const messagesEnd = useRef<HTMLDivElement>(null);
  const inputRef    = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<{ lat: number; lon: number } | null>(null);

  /* ── Drag ── */
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const dragRef    = useRef<{ ox: number; oy: number; startX: number; startY: number } | null>(null);
  const wasDragged = useRef(false);

  function startDrag(e: React.PointerEvent) {
    if (e.button !== undefined && e.button > 0) return;
    wasDragged.current = false;
    const rect = containerRef.current!.getBoundingClientRect();
    dragRef.current = { ox: e.clientX - rect.left, oy: e.clientY - rect.top, startX: e.clientX, startY: e.clientY };
  }
  function moveDrag(e: React.PointerEvent) {
    if (!dragRef.current) return;
    if (Math.abs(e.clientX - dragRef.current.startX) < 6 && Math.abs(e.clientY - dragRef.current.startY) < 6) return;
    wasDragged.current = true;
    const w = containerRef.current?.offsetWidth ?? 380;
    const h = containerRef.current?.offsetHeight ?? 60;
    setPos({
      x: Math.max(0, Math.min(window.innerWidth - w,  e.clientX - dragRef.current.ox)),
      y: Math.max(0, Math.min(window.innerHeight - h, e.clientY - dragRef.current.oy)),
    });
  }
  function endDrag() {
    dragRef.current = null;
    setTimeout(() => { wasDragged.current = false; }, 50);
  }

  useEffect(() => {
    if (open && locationRef.current === null) {
      try {
        const stored = localStorage.getItem("ankernetz_location");
        if (stored) locationRef.current = JSON.parse(stored);
      } catch { /* ignore */ }
    }
  }, [open]);

  useEffect(() => {
    if (open && !minimized) messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, minimized]);

  useEffect(() => {
    if (open && !minimized) inputRef.current?.focus();
  }, [open, minimized]);

  const userHasWritten = messages.some(m => m.role === "user");
  const posStyle: React.CSSProperties = pos
    ? { position: "fixed", top: pos.y, left: pos.x, zIndex: 1000 }
    : { position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 1000 };

  /* ── API call ── */
  async function sendMessageWithText(text: string) {
    if (!text.trim() || loading) return;
    const crisis = isCrisisMessage(text);
    if (crisis) setCrisisBanner(true);
    const pageContext = typeof window !== "undefined" ? window.location.pathname : "";
    const enrichedText = pageContext && pageContext !== "/"
      ? `[SEITE:${pageContext}] ${text}`
      : text;
    const newMessages: Message[] = [...messages, { role: "user", content: text, crisis }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    const location = locationRef.current;
    const apiMessages = newMessages.map((m, i) =>
      i === newMessages.length - 1 && m.role === "user"
        ? { role: m.role, content: enrichedText }
        : { role: m.role, content: m.content }
    );
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
          sessionId: sessionId.current,
          userMessageCount: messages.filter(m => m.role === "user").length + 1,
          location,
        }),
      });
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let txt = "";
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          txt += decoder.decode(value, { stream: true });
          setMessages(prev => { const u = [...prev]; u[u.length - 1] = { role: "assistant", content: txt }; return u; });
        }
      }
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: t.errorMessage }]);
    } finally {
      setLoading(false);
    }
  }

  function resetChat() {
    setMessages([{ role: "assistant", content: t.initialMessage }]);
    setChipsUsed(false);
    setCrisisBanner(false);
    setInput("");
  }

  function sendMessage() { sendMessageWithText(input.trim()); }
  function sendChip(chip: { id: string; label: string }) {
    setChipsUsed(true);
    const preset = t.presets[chip.id];
    if (preset?.crisis) {
      sendMessageWithText(chip.label);
    } else if (preset) {
      setMessages(prev => [
        ...prev,
        { role: "user", content: chip.label },
        { role: "assistant", content: preset.content, cta: preset.cta },
      ]);
    } else {
      sendMessageWithText(chip.label);
    }
  }
  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  }

  /* ══ GESCHLOSSEN ══ */
  if (!open) {
    return (
      <div
        ref={containerRef}
        onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag}
        style={{ ...posStyle, userSelect: "none", WebkitUserSelect: "none", display: "flex", alignItems: "center", gap: "12px", cursor: "grab" }}
      >
        {/* Bubble */}
        <div
          onClick={() => { if (!wasDragged.current) setOpen(true); }}
          style={{
            background: "white", borderRadius: "16px",
            padding: "10px 16px", boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
            border: "1px solid rgba(26,63,111,0.08)", cursor: "pointer",
            animation: "floatIn 0.4s ease both",
          }}
        >
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", lineHeight: 1.3 }}>{t.bubbleTitle}</p>
          <p style={{ fontSize: "11px", color: "#64748b", lineHeight: 1.3, marginTop: "2px" }}>{t.bubbleSub}</p>
        </div>

        {/* Button */}
        <button
          aria-label={t.ariaOpen}
          onClick={() => { if (!wasDragged.current) setOpen(true); }}
          style={{
            width: "62px", height: "62px", borderRadius: "50%",
            background: "linear-gradient(135deg, #1a3f6f 0%, #3b6fc4 100%)",
            border: "3px solid white", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 32px rgba(26,63,111,0.45)",
            position: "relative", flexShrink: 0,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          <MessageCircle size={26} color="white" strokeWidth={1.75} />
          <span style={{ position: "absolute", top: "4px", right: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e", border: "2px solid white" }} />
          <span style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: "2px solid rgba(26,63,111,0.2)", animation: "pulse 2.5s ease-out infinite" }} />
          <span style={{ position: "absolute", inset: "-13px", borderRadius: "50%", border: "1.5px solid rgba(26,63,111,0.1)", animation: "pulse 2.5s ease-out 0.7s infinite" }} />
        </button>

        <style>{`
          @keyframes pulse { 0%{transform:scale(.95);opacity:1} 70%,100%{transform:scale(1.18);opacity:0} }
          @keyframes floatIn { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
        `}</style>
      </div>
    );
  }

  /* ══ GEÖFFNET ══ */
  return (
    <div
      ref={containerRef}
      onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag}
      style={{
        ...posStyle,
        userSelect: "none", WebkitUserSelect: "none",
        width: "375px", maxWidth: "calc(100vw - 1.5rem)",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.06)",
        display: "flex", flexDirection: "column", overflow: "hidden",
        height: minimized ? "68px" : "560px",
        transition: "height 0.3s cubic-bezier(.4,0,.2,1)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ── Header ── */}
      <div
        onClick={() => minimized && setMinimized(false)}
        style={{
          background: "linear-gradient(135deg, #0c1e3c 0%, #1a3f6f 55%, #1e5094 100%)",
          padding: "14px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0, cursor: "grab", touchAction: "none",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Hintergrundkreis */}
        <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "10px", zIndex: 1 }}>
          <GripVertical size={12} color="rgba(255,255,255,0.25)" />
          {/* Avatar */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6 0%, #6FA3FE 100%)",
              border: "2.5px solid rgba(255,255,255,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", fontWeight: 900, color: "white",
              boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
            }}>L</div>
            <span style={{
              position: "absolute", bottom: "1px", right: "1px",
              width: "11px", height: "11px", borderRadius: "50%",
              background: "#22c55e", border: "2px solid #0c1e3c",
              boxShadow: "0 0 0 2px rgba(34,197,94,0.3)",
            }} />
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}>Lena</p>
            <p style={{ fontSize: "11px", color: loading ? "#86efac" : "rgba(255,255,255,0.5)", lineHeight: 1.3, marginTop: "1px", transition: "color 0.3s" }}>
              {loading ? t.headerTyping : t.headerOnline}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2px", zIndex: 1 }}>
          <button onClick={e => { e.stopPropagation(); setMinimized(!minimized); }}
            style={{ background: "rgba(255,255,255,0.08)", border: "none", cursor: "pointer", padding: "6px", color: "rgba(255,255,255,0.7)", display: "flex", borderRadius: "8px", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
            <ChevronDown size={15} style={{ transform: minimized ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }} />
          </button>
          <button onClick={e => { e.stopPropagation(); setOpen(false); }}
            style={{ background: "rgba(255,255,255,0.08)", border: "none", cursor: "pointer", padding: "6px", color: "rgba(255,255,255,0.7)", display: "flex", borderRadius: "8px", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,68,68,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Krisenbanner */}
      {crisisBanner && !minimized && (
        <div style={{ background: "linear-gradient(135deg, #fef2f2, #fff5f5)", borderBottom: "1px solid #fecaca",
          padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexShrink: 0 }}>
          <p style={{ fontSize: "12px", color: "#dc2626", fontWeight: 600, lineHeight: 1.4 }}>
            {t.crisisBanner}
          </p>
          <a href="tel:+493022454322" style={{ fontSize: "12px", fontWeight: 700, color: "white",
            background: "linear-gradient(135deg, #dc2626, #ef4444)", padding: "5px 12px", borderRadius: "100px",
            textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "5px",
            boxShadow: "0 2px 8px rgba(220,38,38,0.4)" }}>
            <Phone size={11} /> 030 22 45 43 22
          </a>
        </div>
      )}

      {/* ── Messages ── */}
      {!minimized && (
        <div style={{
          flex: 1, overflowY: "auto", padding: "16px 14px",
          display: "flex", flexDirection: "column", gap: "8px",
          background: "linear-gradient(180deg, #f0f4ff 0%, #f8faff 100%)",
        }}>

          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              alignItems: "flex-end", gap: "8px",
              animation: "msgIn 0.2s ease both",
            }}>
              {msg.role === "assistant" && (
                <div style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a3f6f 0%, #3b6fc4 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 900, color: "white",
                  flexShrink: 0, marginBottom: "2px",
                  boxShadow: "0 2px 8px rgba(26,63,111,0.3)",
                }}>L</div>
              )}
              <div style={{
                maxWidth: "76%",
                padding: msg.content ? "10px 14px" : "12px 16px",
                borderRadius: msg.role === "user"
                  ? "18px 18px 4px 18px"
                  : "4px 18px 18px 18px",
                background: msg.role === "user"
                  ? "linear-gradient(135deg, #1a3f6f 0%, #2563eb 100%)"
                  : "white",
                color: msg.role === "user" ? "white" : "#0f172a",
                fontSize: "13.5px", lineHeight: "1.65",
                boxShadow: msg.role === "user"
                  ? "0 4px 12px rgba(26,63,111,0.35)"
                  : "0 2px 8px rgba(0,0,0,0.07)",
                border: msg.role === "assistant" ? "1px solid rgba(26,63,111,0.06)" : "none",
              }}>
                {msg.content || (
                  <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    {[0, 1, 2].map(j => (
                      <span key={j} style={{
                        width: "7px", height: "7px", borderRadius: "50%",
                        background: "linear-gradient(135deg, #93c5fd, #3b82f6)",
                        animation: `typingDot 1.4s ease-in-out ${j * 0.2}s infinite`,
                      }} />
                    ))}
                  </span>
                )}
                {msg.cta && msg.cta.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px" }}>
                    {msg.cta.map((btn, bi) => (
                      <a key={bi} href={btn.href}
                        onClick={e => e.stopPropagation()}
                        style={{
                          display: "block", textAlign: "center",
                          padding: "7px 12px", borderRadius: "10px",
                          fontSize: "12px", fontWeight: 700,
                          textDecoration: "none",
                          background: bi === 0
                            ? "linear-gradient(135deg, #1a3f6f, #2563eb)"
                            : "rgba(26,63,111,0.07)",
                          color: bi === 0 ? "white" : "#1a3f6f",
                          border: bi === 0 ? "none" : "1px solid rgba(26,63,111,0.15)",
                          boxShadow: bi === 0 ? "0 3px 10px rgba(26,63,111,0.3)" : "none",
                          transition: "opacity 0.15s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                      >{btn.label}</a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Zurück zu den Themen */}
          {chipsUsed && !loading && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "4px", animation: "msgIn 0.25s ease both" }}>
              <button
                onClick={resetChat}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: "none", border: "1.5px solid rgba(26,63,111,0.15)",
                  borderRadius: "100px", padding: "5px 14px",
                  fontSize: "11.5px", fontWeight: 600, color: "#64748b",
                  cursor: "pointer", transition: "all 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,63,111,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#1a3f6f";
                  (e.currentTarget as HTMLElement).style.background = "rgba(26,63,111,0.04)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,63,111,0.15)";
                  (e.currentTarget as HTMLElement).style.color = "#64748b";
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                ← Anderes Thema
              </button>
            </div>
          )}

          {/* Quick-Reply Chips */}
          {!userHasWritten && !chipsUsed && !loading && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px", paddingLeft: "38px" }}>
              {quickChips.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <button key={chip.id} onClick={() => sendChip(chip)} style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "7px 13px",
                    background: "white",
                    border: `1.5px solid ${chip.color}30`,
                    borderRadius: "100px",
                    fontSize: "12px", fontWeight: 600, color: chip.color,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    transition: "all 0.18s ease",
                    animation: `chipIn 0.3s ease ${i * 0.07}s both`,
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = chip.color + "12";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px ${chip.color}25`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "white";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                    }}
                  >
                    <Icon size={12} strokeWidth={2.5} />
                    {chip.label}
                  </button>
                );
              })}
            </div>
          )}

          <div ref={messagesEnd} />
        </div>
      )}

      {/* ── Input ── */}
      {!minimized && (
        <div style={{
          borderTop: `1px solid ${inputFocused ? "#bfdbfe" : "#e8edf5"}`,
          padding: "12px 14px 10px",
          background: "white", flexShrink: 0,
          transition: "border-color 0.2s",
        }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder={t.inputPlaceholder}
              rows={1}
              style={{
                flex: 1, border: `1.5px solid ${inputFocused ? "#93c5fd" : "#e2e8f0"}`,
                borderRadius: "14px", padding: "9px 13px",
                fontSize: "13.5px", color: "#0f172a",
                background: inputFocused ? "#f0f7ff" : "#f8fafd",
                resize: "none", outline: "none",
                lineHeight: "1.5", fontFamily: "inherit",
                maxHeight: "90px", overflowY: "auto",
                transition: "all 0.2s ease",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                width: "40px", height: "40px", borderRadius: "12px",
                background: input.trim() && !loading
                  ? "linear-gradient(135deg, #1a3f6f 0%, #2563eb 100%)"
                  : "#e8edf5",
                border: "none",
                cursor: input.trim() && !loading ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.2s ease",
                boxShadow: input.trim() && !loading ? "0 4px 12px rgba(26,63,111,0.4)" : "none",
                transform: input.trim() && !loading ? "scale(1)" : "scale(0.95)",
              }}
              onMouseEnter={e => { if (input.trim() && !loading) (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = input.trim() && !loading ? "scale(1)" : "scale(0.95)"; }}
            >
              <Send size={16} color={input.trim() && !loading ? "white" : "#94a3b8"} strokeWidth={2} />
            </button>
          </div>
          <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center", marginTop: "8px", letterSpacing: "0.02em" }}>
            {t.footerText}
          </p>
        </div>
      )}

      <style>{`
        @keyframes typingDot {
          0%,60%,100% { transform: translateY(0); opacity: .5; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipIn {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
