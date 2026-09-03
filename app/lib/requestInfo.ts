import type { NextRequest } from "next/server";

export interface AnfrageInfo {
  ip: string;
  land: string;
  region: string;
  stadt: string;
  userAgent: string;
  geraet: string;
  sprache: string;
  referer: string;
}

function erkenneGeraet(ua: string): string {
  if (!ua || ua === "unbekannt") return "unbekannt";
  const u = ua.toLowerCase();
  if (/bot|crawl|spider|curl|wget|python|scrapy|headless|axios|postman/.test(u)) return "Bot/Skript (kein Browser)";
  let os = "unbekanntes System";
  if (/iphone/.test(u)) os = "iPhone";
  else if (/ipad/.test(u)) os = "iPad";
  else if (/android/.test(u)) os = "Android";
  else if (/macintosh|mac os/.test(u)) os = "Mac";
  else if (/windows/.test(u)) os = "Windows";
  else if (/linux/.test(u)) os = "Linux";
  let browser = "unbekannter Browser";
  if (/edg\//.test(u)) browser = "Edge";
  else if (/chrome\//.test(u) && !/edg\//.test(u)) browser = "Chrome";
  else if (/safari\//.test(u) && !/chrome\//.test(u)) browser = "Safari";
  else if (/firefox\//.test(u)) browser = "Firefox";
  return `${os} · ${browser}`;
}

export function holeAnfrageInfo(req: NextRequest): AnfrageInfo {
  const h = req.headers;
  const ip = h.get("x-real-ip") || h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unbekannt";
  const userAgent = h.get("user-agent") || "unbekannt";
  return {
    ip,
    land: h.get("x-vercel-ip-country") || "unbekannt",
    region: h.get("x-vercel-ip-country-region") || "unbekannt",
    stadt: h.get("x-vercel-ip-city") ? decodeURIComponent(h.get("x-vercel-ip-city")!) : "unbekannt",
    userAgent,
    geraet: erkenneGeraet(userAgent),
    sprache: h.get("accept-language")?.split(",")[0] || "unbekannt",
    referer: h.get("referer") || "direkt/kein Referer",
  };
}

export function formatiereAnfrageInfo(info: AnfrageInfo): string {
  return [
    `IP: ${info.ip}`,
    `Ort: ${info.stadt}, ${info.region}, ${info.land}`,
    `Gerät: ${info.geraet}`,
    `Sprache: ${info.sprache}`,
    `Referer: ${info.referer}`,
  ].join("\n");
}
