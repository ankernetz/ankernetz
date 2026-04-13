"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageCircle, Send, Phone, ChevronDown, GripVertical } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  crisis?: boolean;
}

const CRISIS_KEYWORDS = [
  "suizid", "selbstmord", "umbringen", "sterben", "nicht mehr leben",
  "aufgeben", "kein ausweg", "niemanden", "alles beenden",
  "ritzen", "selbstverletzung", "verletzen", "missbrauch", "gewalt",
  "notruf", "notfall", "hilfe sofort"
];

function isCrisisMessage(text: string): boolean {
  const lower = text.toLowerCase();
  return CRISIS_KEYWORDS.some(kw => lower.includes(kw));
}

function generateSessionId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hallo! Ich bin Lena vom Ankernetz-Team. Ich bin hier, um dir zu helfen — egal ob du eine schnelle Frage hast oder gerade etwas Schwieriges durchmachst." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCrisisBanner, setShowCrisisBanner] = useState(false);
  const [chipsUsed, setChipsUsed] = useState(false);
  const sessionId = useRef<string>(generateSessionId());

  /* ── Drag ── */
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ ox: number; oy: number; startX: number; startY: number } | null>(null);
  const wasDragged = useRef(false);

  function startDrag(e: React.PointerEvent) {
    if (e.button !== undefined && e.button > 0) return;
    wasDragged.current = false;
    const rect = containerRef.current!.getBoundingClientRect();
    dragRef.current = {
      ox: e.clientX - rect.left,
      oy: e.clientY - rect.top,
      startX: e.clientX,
      startY: e.clientY,
    };
  }

  function moveDrag(e: React.PointerEvent) {
    if (!dragRef.current) return;
    const dx = Math.abs(e.clientX - dragRef.current.startX);
    const dy = Math.abs(e.clientY - dragRef.current.startY);
    if (dx < 6 && dy < 6) return;
    wasDragged.current = true;
    const newX = e.clientX - dragRef.current.ox;
    const newY = e.clientY - dragRef.current.oy;
    const w = containerRef.current?.offsetWidth ?? 360;
    const h = containerRef.current?.offsetHeight ?? 60;
    setPos({
      x: Math.max(0, Math.min(window.innerWidth - w, newX)),
      y: Math.max(0, Math.min(window.innerHeight - h, newY)),
    });
  }

  function endDrag() {
    dragRef.current = null;
    // wasDragged bleibt bis zum nächsten startDrag erhalten,
    // damit onClick es noch lesen kann
    setTimeout(() => { wasDragged.current = false; }, 50);
  }

  /* Verhindert ungewolltes Textselektieren beim Ziehen */
  const draggingStyle: React.CSSProperties = {
    userSelect: "none",
    WebkitUserSelect: "none",
  };

  const posStyle: React.CSSProperties = pos
    ? { position: "fixed", top: pos.y, left: pos.x, zIndex: 1000 }
    : { position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 1000 };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && !minimized) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, minimized]);

  useEffect(() => {
    if (open && !minimized) inputRef.current?.focus();
  }, [open, minimized]);

  async function sendMessage() {
    await sendMessageWithText(input.trim());
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  /* ── GESCHLOSSEN ── */
  if (!open) {
    return (
      <div
        ref={containerRef}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        style={{
          ...posStyle,
          ...draggingStyle,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "grab",
        }}
      >
        {/* Label-Blase */}
        <div
          style={{
            background: "white",
            borderRadius: "0.875rem",
            padding: "0.625rem 1rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            border: "1px solid rgba(26,63,111,0.1)",
            cursor: "pointer",
            animation: "floatIn 0.4s ease both",
          }}
          onClick={() => {
            if (!wasDragged.current) setOpen(true);
          }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#1a3f6f", whiteSpace: "nowrap", lineHeight: 1.3 }}>
            Wie kann ich helfen?
          </p>
          <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.3, marginTop: "1px" }}>
            Lena · Ankernetz
          </p>
        </div>

        {/* Haupt-Button */}
        <button
          aria-label="Chat öffnen"
          onClick={() => {
            if (!wasDragged.current) setOpen(true);
          }}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1a3f6f 0%, #2d5fa0 100%)",
            border: "3px solid white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 28px rgba(26,63,111,0.5)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            position: "relative",
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 36px rgba(26,63,111,0.6)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(26,63,111,0.5)";
          }}
        >
          <MessageCircle size={26} color="white" strokeWidth={1.5} />
          <span style={{ position: "absolute", top: "3px", right: "3px", width: "12px", height: "12px",
            borderRadius: "50%", background: "#22c55e", border: "2px solid white" }} />
          <span style={{ position: "absolute", inset: "-6px", borderRadius: "50%",
            border: "2px solid rgba(26,63,111,0.25)", animation: "chatPulse 2.5s ease-out infinite" }} />
          <span style={{ position: "absolute", inset: "-12px", borderRadius: "50%",
            border: "1.5px solid rgba(26,63,111,0.12)", animation: "chatPulse 2.5s ease-out 0.6s infinite" }} />
        </button>

        <style>{`
          @keyframes chatPulse {
            0% { transform: scale(0.95); opacity: 1; }
            70% { transform: scale(1.15); opacity: 0; }
            100% { transform: scale(1.15); opacity: 0; }
          }
          @keyframes floatIn {
            from { opacity: 0; transform: translateX(12px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </div>
    );
  }

  const quickChips = [
    "Ich brauche einen Platz",
    "Krisenintervention",
    "Ich habe eine Frage",
    "Beratung anfragen",
  ];

  function sendChip(text: string) {
    setChipsUsed(true);
    setInput(text);
    setTimeout(() => {
      sendMessageWithText(text);
    }, 0);
  }

  async function sendMessageWithText(text: string) {
    if (!text.trim() || loading) return;
    const crisis = isCrisisMessage(text);
    if (crisis) setShowCrisisBanner(true);
    const newMessages: Message[] = [...messages, { role: "user", content: text, crisis }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const userMessageCount = messages.filter(m => m.role === "user").length + 1;
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          sessionId: sessionId.current,
          userMessageCount,
        }),
      });
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantText += decoder.decode(value, { stream: true });
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", content: assistantText };
            return updated;
          });
        }
      }
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Ich bin kurz nicht erreichbar. Ruf direkt an: +49 (0) 30 22 45 43 22" }]);
    } finally {
      setLoading(false);
    }
  }

  const userHasWritten = messages.some(m => m.role === "user");

  /* ── GEÖFFNET ── */
  return (
    <div
      ref={containerRef}
      style={{
        ...posStyle,
        ...draggingStyle,
        width: "370px",
        maxWidth: "calc(100vw - 1.5rem)",
        borderRadius: "1.25rem",
        background: "#ffffff",
        boxShadow: "0 12px 56px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: minimized ? "64px" : "560px",
        transition: "height 0.3s cubic-bezier(.4,0,.2,1)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ── Header ── */}
      <div
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onClick={() => minimized && setMinimized(false)}
        style={{
          background: "linear-gradient(135deg, #0d2444 0%, #1a3f6f 100%)",
          padding: "1rem 1.125rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          cursor: "grab",
          touchAction: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <GripVertical size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} style={{ flexShrink: 0 }} />
          {/* Avatar mit grünem Online-Dot */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{
              width: "38px", height: "38px", borderRadius: "50%",
              background: "linear-gradient(135deg, #2d5fa0 0%, #6FA3FE 100%)",
              border: "2px solid rgba(255,255,255,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "15px", fontWeight: 800, color: "white",
            }}>L</div>
            <span style={{
              position: "absolute", bottom: "1px", right: "1px",
              width: "10px", height: "10px", borderRadius: "50%",
              background: "#22c55e", border: "2px solid #0d2444",
            }} />
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "white", lineHeight: 1.2, letterSpacing: "-0.01em" }}>Lena</p>
            <p style={{ fontSize: "11px", lineHeight: 1.3, marginTop: "1px",
              color: loading ? "#86efac" : "rgba(255,255,255,0.55)" }}>
              {loading ? "● schreibt gerade…" : "Ankernetz Berlin · Online"}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.125rem", alignItems: "center" }}>
          <button onClick={e => { e.stopPropagation(); setMinimized(!minimized); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.375rem",
              color: "rgba(255,255,255,0.6)", display: "flex", borderRadius: "6px" }}>
            <ChevronDown size={16} style={{ transform: minimized ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }} />
          </button>
          <button onClick={e => { e.stopPropagation(); setOpen(false); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.375rem",
              color: "rgba(255,255,255,0.6)", display: "flex", borderRadius: "6px" }}>
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Krisenbanner */}
      {showCrisisBanner && !minimized && (
        <div style={{ background: "#fef2f2", borderBottom: "1px solid #fecaca",
          padding: "0.625rem 1rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "0.5rem", flexShrink: 0 }}>
          <p style={{ fontSize: "11.5px", color: "#dc2626", fontWeight: 600, lineHeight: 1.4 }}>
            🚨 Akute Gefahr? Sofort anrufen:
          </p>
          <a href="tel:+4930224543220" style={{ fontSize: "12px", fontWeight: 700, color: "white",
            background: "#dc2626", padding: "0.3rem 0.75rem", borderRadius: "100px",
            textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <Phone size={11} /> 030 22 45 43 22
          </a>
        </div>
      )}

      {/* Messages */}
      {!minimized && (
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 0.875rem",
          display: "flex", flexDirection: "column", gap: "0.625rem",
          background: "#f8fafd" }}>

          {messages.map((msg, i) => (
            <div key={i}>
              <div style={{ display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                alignItems: "flex-end", gap: "0.5rem" }}>
                {msg.role === "assistant" && (
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a3f6f 0%, #2d5fa0 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 800, color: "white",
                    flexShrink: 0, marginBottom: "2px", boxShadow: "0 2px 6px rgba(26,63,111,0.3)",
                  }}>L</div>
                )}
                <div style={{
                  maxWidth: "78%",
                  padding: "0.65rem 0.9rem",
                  borderRadius: msg.role === "user"
                    ? "1.1rem 1.1rem 0.2rem 1.1rem"
                    : "0.2rem 1.1rem 1.1rem 1.1rem",
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #1a3f6f 0%, #2d5fa0 100%)"
                    : "#ffffff",
                  color: msg.role === "user" ? "white" : "#1a2e4a",
                  fontSize: "13.5px", lineHeight: "1.65",
                  boxShadow: msg.role === "user"
                    ? "0 2px 8px rgba(26,63,111,0.3)"
                    : "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                  {msg.content || (
                    <span style={{ display: "flex", gap: "4px", alignItems: "center", padding: "3px 2px" }}>
                      {[0, 1, 2].map(j => (
                        <span key={j} style={{ width: "6px", height: "6px", borderRadius: "50%",
                          background: "#93c5fd", animation: `bounce 1.3s ease-in-out ${j * 0.18}s infinite` }} />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Quick-Reply Chips — nur wenn Nutzer noch nichts geschrieben hat */}
          {!userHasWritten && !chipsUsed && !loading && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.25rem", paddingLeft: "36px" }}>
              {quickChips.map(chip => (
                <button key={chip} onClick={() => sendChip(chip)} style={{
                  padding: "0.35rem 0.75rem",
                  background: "white",
                  border: "1.5px solid #d0dff0",
                  borderRadius: "100px",
                  fontSize: "12px", fontWeight: 600, color: "#1a3f6f",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  transition: "all 0.15s ease",
                  whiteSpace: "nowrap",
                }}>
                  {chip}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input */}
      {!minimized && (
        <div style={{ borderTop: "1px solid #edf0f5", padding: "0.75rem 0.875rem",
          display: "flex", flexDirection: "column", gap: "0.5rem",
          background: "#fff", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Schreib eine Nachricht…"
              rows={1}
              style={{ flex: 1, border: "1.5px solid #e2e8f0", borderRadius: "0.875rem",
                padding: "0.55rem 0.875rem", fontSize: "13.5px", color: "#1a2e4a",
                background: "#f8fafd", resize: "none", outline: "none",
                lineHeight: "1.5", fontFamily: "inherit", maxHeight: "90px", overflowY: "auto",
                transition: "border-color 0.15s ease" }}
              onFocus={e => (e.target.style.borderColor = "#6FA3FE")}
              onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
            />
            <button onClick={sendMessage} disabled={!input.trim() || loading}
              style={{ width: "38px", height: "38px", borderRadius: "50%",
                background: input.trim() && !loading
                  ? "linear-gradient(135deg, #1a3f6f 0%, #2d5fa0 100%)"
                  : "#edf0f5",
                border: "none", cursor: input.trim() && !loading ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.2s ease",
                boxShadow: input.trim() && !loading ? "0 2px 8px rgba(26,63,111,0.35)" : "none",
              }}>
              <Send size={15} color={input.trim() && !loading ? "white" : "#b0bec5"} strokeWidth={2} />
            </button>
          </div>
          <p style={{ fontSize: "10px", color: "#b0bec5", textAlign: "center", letterSpacing: "0.02em" }}>
            Ankernetz Berlin · Vertraulich · Kostenlos
          </p>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
