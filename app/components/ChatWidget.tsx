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
    { role: "assistant", content: "Hallo, ich bin Lena vom Ankernetz-Team. Wie kann ich dir heute helfen?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCrisisBanner, setShowCrisisBanner] = useState(false);
  const sessionId = useRef<string>(generateSessionId());

  /* ── Drag ── */
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ ox: number; oy: number; startX: number; startY: number; moved: boolean } | null>(null);

  function startDrag(e: React.PointerEvent) {
    if (e.button !== undefined && e.button > 0) return;
    const rect = containerRef.current!.getBoundingClientRect();
    dragRef.current = {
      ox: e.clientX - rect.left,
      oy: e.clientY - rect.top,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
  }

  function moveDrag(e: React.PointerEvent) {
    if (!dragRef.current) return;
    const dx = Math.abs(e.clientX - dragRef.current.startX);
    const dy = Math.abs(e.clientY - dragRef.current.startY);
    // Erst ab 6px Bewegung als Drag werten
    if (dx < 6 && dy < 6) return;
    dragRef.current.moved = true;
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
    if (!input.trim() || loading) return;
    const userText = input.trim();
    const crisis = isCrisisMessage(userText);
    if (crisis) setShowCrisisBanner(true);
    const newMessages: Message[] = [...messages, { role: "user", content: userText, crisis }];
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
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Ich bin kurz nicht erreichbar. Ruf direkt an: +49 (0) 30 22 45 43 22" },
      ]);
    } finally {
      setLoading(false);
    }
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
            if (!dragRef.current?.moved) setOpen(true);
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
            if (!dragRef.current?.moved) setOpen(true);
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

  /* ── GEÖFFNET ── */
  return (
    <div
      ref={containerRef}
      style={{
        ...posStyle,
        ...draggingStyle,
        width: "360px",
        maxWidth: "calc(100vw - 2rem)",
        borderRadius: "1.25rem",
        background: "#ffffff",
        boxShadow: "0 8px 48px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: minimized ? "56px" : "520px",
        transition: "height 0.3s ease",
      }}
    >
      {/* ── Header (Drag-Handle) ── */}
      <div
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        style={{
          background: "#1a3f6f",
          padding: "0.875rem 1.125rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          cursor: "grab",
          touchAction: "none",
        }}
        onClick={() => minimized && setMinimized(false)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Grip-Icon als visueller Drag-Hinweis */}
          <GripVertical size={14} color="rgba(255,255,255,0.4)" strokeWidth={2} />
          {/* Avatar */}
          <div style={{ width: "32px", height: "32px", borderRadius: "50%",
            background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "14px", fontWeight: 700, color: "white", flexShrink: 0 }}>
            L
          </div>
          <div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "white", lineHeight: 1.2 }}>Lena</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.2 }}>
              {loading ? "schreibt…" : "Ankernetz · Online"}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.25rem" }}>
          <button
            onClick={e => { e.stopPropagation(); setMinimized(!minimized); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem",
              color: "rgba(255,255,255,0.7)", display: "flex" }}
          >
            <ChevronDown size={16} style={{ transform: minimized ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); setOpen(false); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem",
              color: "rgba(255,255,255,0.7)", display: "flex" }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Krisenbanner */}
      {showCrisisBanner && !minimized && (
        <div style={{ background: "#fef2f2", borderBottom: "1px solid #fecaca",
          padding: "0.625rem 1rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "0.5rem", flexShrink: 0 }}>
          <p style={{ fontSize: "11px", color: "#dc2626", fontWeight: 500, lineHeight: 1.4 }}>
            Akute Gefahr? Ruf jetzt an:
          </p>
          <a href="tel:+4930224543220" style={{ fontSize: "12px", fontWeight: 700, color: "white",
            background: "#dc2626", padding: "0.25rem 0.625rem", borderRadius: "100px",
            textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <Phone size={11} />
            030 22 45 43 22
          </a>
        </div>
      )}

      {/* Messages */}
      {!minimized && (
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem",
          display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              alignItems: "flex-end", gap: "0.5rem" }}>
              {msg.role === "assistant" && (
                <div style={{ width: "26px", height: "26px", borderRadius: "50%",
                  background: "#1a3f6f", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "11px", fontWeight: 700,
                  color: "white", flexShrink: 0, marginBottom: "2px" }}>L</div>
              )}
              <div style={{
                maxWidth: "75%", padding: "0.625rem 0.875rem",
                borderRadius: msg.role === "user" ? "1rem 1rem 0.25rem 1rem" : "1rem 1rem 1rem 0.25rem",
                background: msg.role === "user" ? "#1a3f6f" : "#f4f7fb",
                color: msg.role === "user" ? "white" : "#1a3f6f",
                fontSize: "13.5px", lineHeight: "1.65", fontWeight: 400,
              }}>
                {msg.content || (
                  <span style={{ display: "flex", gap: "3px", alignItems: "center", padding: "2px 0" }}>
                    {[0, 1, 2].map(j => (
                      <span key={j} style={{ width: "5px", height: "5px", borderRadius: "50%",
                        background: "#9ca3af", animation: `bounce 1.2s ease-in-out ${j * 0.2}s infinite` }} />
                    ))}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input */}
      {!minimized && (
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "0.75rem",
          display: "flex", alignItems: "flex-end", gap: "0.5rem",
          background: "#fafafa", flexShrink: 0 }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Schreib uns…"
            rows={1}
            style={{ flex: 1, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.75rem",
              padding: "0.5rem 0.75rem", fontSize: "13.5px", color: "#1a3f6f",
              background: "white", resize: "none", outline: "none",
              lineHeight: "1.5", fontFamily: "inherit", maxHeight: "80px", overflowY: "auto" }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            style={{ width: "36px", height: "36px", borderRadius: "50%",
              background: input.trim() && !loading ? "#1a3f6f" : "#e2e8f0",
              border: "none", cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, transition: "background 0.2s ease" }}
          >
            <Send size={15} color={input.trim() && !loading ? "white" : "#9ca3af"} strokeWidth={1.5} />
          </button>
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
