/* eslint-disable @typescript-eslint/no-require-imports */
const { createCanvas, GlobalFonts } = require("@napi-rs/canvas");
const fs = require("fs");
const path = require("path");

const FONTS = "C:/Users/Marlon/AppData/Roaming/Claude/local-agent-mode-sessions/skills-plugin/45034e32-b1de-417f-926f-6c5c674f4179/468a1c28-9af6-4601-a355-52b19b061f33/skills/canvas-design/canvas-fonts";

GlobalFonts.registerFromPath(path.join(FONTS, "BricolageGrotesque-Bold.ttf"), "Bricolage");
GlobalFonts.registerFromPath(path.join(FONTS, "BricolageGrotesque-Regular.ttf"), "BricolageReg");
GlobalFonts.registerFromPath(path.join(FONTS, "Outfit-Regular.ttf"), "Outfit");
GlobalFonts.registerFromPath(path.join(FONTS, "Outfit-Bold.ttf"), "OutfitBold");
GlobalFonts.registerFromPath(path.join(FONTS, "InstrumentSans-Regular.ttf"), "InstrSans");
GlobalFonts.registerFromPath(path.join(FONTS, "InstrumentSans-Bold.ttf"), "InstrSansBold");

const W = 1200, H = 980;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

// ── palette ───────────────────────────────────────────────────────────────────
const C = {
  navy:   "#1e3a5f",
  blue:   "#2563eb",
  blueLt: "#eff6ff",
  blueBd: "#bfdbfe",
  green:  "#16a34a",
  greenLt:"#f0fdf4",
  greenBd:"#86efac",
  gray:   "#475569",
  grayLt: "#f8fafc",
  grayBd: "#cbd5e1",
  white:  "#ffffff",
  bg:     "#eef2f7",
  text:   "#1e293b",
  muted:  "#64748b",
};

// ── helpers ───────────────────────────────────────────────────────────────────
function rr(x, y, w, h, r, fill, stroke, sw = 1) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if (fill)   { ctx.fillStyle = fill;     ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = sw; ctx.stroke(); }
}

function setShadow(blur = 10, color = "rgba(0,0,0,0.10)", ox = 0, oy = 4) {
  ctx.shadowBlur = blur; ctx.shadowColor = color;
  ctx.shadowOffsetX = ox; ctx.shadowOffsetY = oy;
}
function clearShadow() {
  ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
  ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;
}

function txt(str, x, y, font, size, color, align = "left", maxW) {
  ctx.font = `${size}px ${font}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  if (maxW) ctx.fillText(str, x, y, maxW);
  else ctx.fillText(str, x, y);
  ctx.textAlign = "left";
}

function arrowV(x, y1, y2, color, lw = 2) {
  ctx.save();
  ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.setLineDash([]);
  ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2 - 8); ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(x - 6, y2 - 8); ctx.lineTo(x + 6, y2 - 8); ctx.lineTo(x, y2); ctx.closePath(); ctx.fill();
  ctx.restore();
}

// ── background ────────────────────────────────────────────────────────────────
const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
bgGrad.addColorStop(0, "#e8eef5");
bgGrad.addColorStop(1, "#f5f8fc");
ctx.fillStyle = bgGrad;
ctx.fillRect(0, 0, W, H);

// dot grid
ctx.fillStyle = "rgba(30,58,95,0.05)";
for (let gx = 36; gx < W; gx += 42)
  for (let gy = 36; gy < H; gy += 42) {
    ctx.beginPath(); ctx.arc(gx, gy, 1.4, 0, Math.PI * 2); ctx.fill();
  }

// ── HEADER ────────────────────────────────────────────────────────────────────
setShadow(20, "rgba(30,58,95,0.28)", 0, 6);
rr(40, 26, W - 80, 68, 14, C.navy);
clearShadow();

txt("ARQUITETURA DIGITAL", 76, 55, "Bricolage", 21, "#ffffff");
txt("Estrutura de tráfego orgânico & leads — MRM Advogados", 76, 78, "Outfit", 12, "rgba(255,255,255,0.55)");
txt("mrmadvogados.com.br", W - 76, 65, "OutfitBold", 12, "rgba(255,255,255,0.6)", "right");

// ── TRAFFIC SOURCES ───────────────────────────────────────────────────────────
const srcY = 136;

// Google box
setShadow(12, "rgba(37,99,235,0.12)", 0, 4);
rr(120, srcY, 370, 76, 12, C.white, C.blueBd, 1.5);
clearShadow();

// G circle
const cx1 = 166, cy1 = srcY + 38;
ctx.fillStyle = "#4285F4";
ctx.beginPath(); ctx.arc(cx1, cy1, 22, 0, Math.PI * 2); ctx.fill();
txt("G", cx1, cy1 + 8, "Bricolage", 22, C.white, "center");

txt("Google Search", 202, srcY + 28, "InstrSansBold", 15, C.navy);
txt("Tráfego orgânico — topo e fundo de funil", 202, srcY + 50, "Outfit", 11.5, C.muted);
rr(380, srcY + 22, 86, 24, 6, "#dbeafe");
txt("Orgânico", 423, srcY + 39, "OutfitBold", 11, C.blue, "center");

// Social box
setShadow(12, "rgba(225,48,108,0.10)", 0, 4);
rr(710, srcY, 370, 76, 12, C.white, "#fbcfe8", 1.5);
clearShadow();

const cx2 = 756, cy2 = srcY + 38;
ctx.fillStyle = "#e1306c";
ctx.beginPath(); ctx.arc(cx2, cy2, 22, 0, Math.PI * 2); ctx.fill();
txt("✦", cx2, cy2 + 8, "Bricolage", 20, C.white, "center");

txt("Redes Sociais", 794, srcY + 28, "InstrSansBold", 15, C.navy);
txt("Distribuição de conteúdo e alcance de marca", 794, srcY + 50, "Outfit", 11.5, C.muted);
rr(970, srcY + 22, 90, 24, 6, "#fce7f3");
txt("Distribuição", 1015, srcY + 39, "OutfitBold", 11, "#be185d", "center");

// ── ARROWS: traffic → columns ────────────────────────────────────────────────
// Google → Blog
arrowV(262, srcY + 76, 252, C.blue, 3);
txt("topo / meio de funil", 270, 210, "Outfit", 10, C.blue);

// Google → LPs (curve via bezier)
ctx.save();
ctx.strokeStyle = C.green; ctx.lineWidth = 1.8; ctx.setLineDash([5, 4]);
ctx.beginPath();
ctx.moveTo(420, srcY + 38);
ctx.bezierCurveTo(640, srcY + 38, 880, 180, 965, 252);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = C.green;
ctx.beginPath(); ctx.moveTo(959, 246); ctx.lineTo(971, 246); ctx.lineTo(965, 258); ctx.closePath(); ctx.fill();
ctx.restore();
txt("fundo de funil", 740, 192, "Outfit", 10, C.green);

// Social → Blog (diagonal)
ctx.save();
ctx.strokeStyle = "#e1306c"; ctx.lineWidth = 1.5; ctx.setLineDash([3, 4]);
ctx.beginPath(); ctx.moveTo(730, srcY + 76); ctx.lineTo(540, 252); ctx.stroke();
ctx.setLineDash([]);
ctx.restore();

// ── DOMAIN CONTAINER ──────────────────────────────────────────────────────────
const domY = 252, domH = 330;
setShadow(24, "rgba(30,58,95,0.10)", 0, 8);
rr(40, domY, W - 80, domH, 16, C.white, C.grayBd, 1.5);
clearShadow();

// Domain pill label
setShadow(8, "rgba(30,58,95,0.22)", 0, 3);
rr(W / 2 - 210, domY - 16, 420, 32, 16, C.navy);
clearShadow();
txt("mrmadvogados.com.br  —  um domínio, toda a autoridade", W / 2, domY + 4, "OutfitBold", 12, "rgba(255,255,255,0.92)", "center");

// ── COLUMN: BLOG ─────────────────────────────────────────────────────────────
const bx = 64, by = domY + 18, bw = 330, bh = 294;
setShadow(10, "rgba(37,99,235,0.14)", 0, 4);
rr(bx, by, bw, bh, 12, C.blueLt, C.blueBd, 1.5);
clearShadow();

rr(bx, by, bw, 42, 12, C.blue);
rr(bx, by + 30, bw, 12, 0, C.blue);
txt("/blog", bx + bw / 2, by + 28, "Bricolage", 15, C.white, "center");

txt("Posts Diários", bx + 22, by + 70, "InstrSansBold", 13, C.navy);
rr(bx + 140, by + 55, 168, 22, 5, "#dbeafe");
txt("400–800 palavras · IA + revisão", bx + 224, by + 70, "OutfitBold", 10, C.blue, "center");

const dailyItems = [
  "Perguntas frequentes (People Also Ask)",
  "Notícias de jurisprudência comentadas",
  "Direitos do consumidor financeiro",
  "Decisões recentes STJ / TJMT",
];
dailyItems.forEach((item, i) => {
  ctx.fillStyle = C.blue;
  ctx.beginPath(); ctx.arc(bx + 30, by + 99 + i * 26, 3.5, 0, Math.PI * 2); ctx.fill();
  txt(item, bx + 44, by + 104 + i * 26, "Outfit", 11.5, C.text);
});

ctx.save();
ctx.strokeStyle = C.blueBd; ctx.lineWidth = 1;
ctx.beginPath(); ctx.moveTo(bx + 16, by + 210); ctx.lineTo(bx + bw - 16, by + 210); ctx.stroke();
ctx.restore();

txt("Artigos Semanais", bx + 22, by + 234, "InstrSansBold", 13, C.navy);
rr(bx + 162, by + 219, 148, 22, 5, "#dbeafe");
txt("1.500–3.000 palavras", bx + 236, by + 234, "OutfitBold", 10, C.blue, "center");

const weeklyItems = ["Guias completos de defesa judicial", "Análise de jurisprudência bancária"];
weeklyItems.forEach((item, i) => {
  ctx.fillStyle = C.blue;
  ctx.beginPath(); ctx.arc(bx + 30, by + 258 + i * 26, 3.5, 0, Math.PI * 2); ctx.fill();
  txt(item, bx + 44, by + 263 + i * 26, "Outfit", 11.5, C.text);
});

// AI badge under blog
rr(bx + 6, by + bh + 8, bw - 12, 26, 8, "#ede9fe");
txt("⚡  Automatizado com IA  —  Claude API + Cron diário", bx + bw / 2 - 6, by + bh + 26, "OutfitBold", 10.5, "#7c3aed", "center");

// ── COLUMN: INSTITUCIONAL ─────────────────────────────────────────────────────
const ix = 430, iy = domY + 18, iw = 330, ih = 294;
setShadow(10, "rgba(100,116,139,0.10)", 0, 4);
rr(ix, iy, iw, ih, 12, C.grayLt, C.grayBd, 1.5);
clearShadow();

rr(ix, iy, iw, 42, 12, C.gray);
rr(ix, iy + 30, iw, 12, 0, C.gray);
txt("/  (home)", ix + iw / 2, iy + 28, "Bricolage", 15, C.white, "center");

txt("Site Institucional", ix + 22, iy + 70, "InstrSansBold", 13, C.navy);

const instItems = [
  ["Quem somos", "Identidade e credenciais OAB"],
  ["Áreas de atuação", "Links para todas as LPs"],
  ["Contato direto", "WhatsApp + formulário"],
  ["Blog destacado", "Posts recentes em destaque"],
  ["Depoimentos", "Prova social e autoridade"],
];
instItems.forEach(([title, sub], i) => {
  ctx.fillStyle = C.gray;
  ctx.beginPath(); ctx.arc(ix + 30, iy + 100 + i * 46, 4, 0, Math.PI * 2); ctx.fill();
  txt(title, ix + 46, iy + 105 + i * 46, "InstrSansBold", 12.5, C.navy);
  txt(sub, ix + 46, iy + 121 + i * 46, "Outfit", 11, C.muted);
});

// ── COLUMN: LANDING PAGES ────────────────────────────────────────────────────
const lx = 796, ly = domY + 18, lw = 384, lh = 294;
setShadow(10, "rgba(22,163,74,0.14)", 0, 4);
rr(lx, ly, lw, lh, 12, C.greenLt, C.greenBd, 1.5);
clearShadow();

rr(lx, ly, lw, 42, 12, C.green);
rr(lx, ly + 30, lw, 12, 0, C.green);
txt("Landing Pages", lx + lw / 2, ly + 28, "Bricolage", 15, C.white, "center");

txt("Páginas de Conversão — Fundo de Funil", lx + 22, ly + 68, "Outfit", 11, "#166534");

const lps = [
  ["/busca-e-apreensao", "Defesa de veículo apreendido"],
  ["/revisao-contrato",   "Revisão de contrato veicular"],
  ["/renegociacao-divida","Renegociação de dívida"],
];
lps.forEach(([slug, desc], i) => {
  const cy = ly + 84 + i * 72;
  setShadow(5, "rgba(22,163,74,0.10)", 0, 2);
  rr(lx + 14, cy, lw - 28, 60, 8, C.white, "#bbf7d0", 1);
  clearShadow();
  txt(slug, lx + 30, cy + 22, "OutfitBold", 11.5, C.green);
  txt(desc, lx + 30, cy + 42, "Outfit", 11.5, C.text);
  rr(lx + lw - 88, cy + 14, 66, 22, 6, "#dcfce7");
  txt("Converter →", lx + lw - 55, cy + 30, "OutfitBold", 10, C.green, "center");
});

// ── INTERNAL ARROWS ───────────────────────────────────────────────────────────
// Blog → LPs (dashed blue)
const blogMidY = by + bh / 2;
const lpMidY   = ly + lh / 2;
ctx.save();
ctx.strokeStyle = C.blue; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
ctx.beginPath();
ctx.moveTo(bx + bw, blogMidY);
ctx.bezierCurveTo(bx + bw + 60, blogMidY, lx - 60, lpMidY, lx, lpMidY);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = C.blue;
ctx.beginPath(); ctx.moveTo(lx - 8, lpMidY - 5); ctx.lineTo(lx - 8, lpMidY + 5); ctx.lineTo(lx, lpMidY); ctx.closePath(); ctx.fill();
txt("CTA + links internos", (bx + bw + lx) / 2, blogMidY - 14, "OutfitBold", 10, C.blue, "center");
ctx.restore();

// Inst ↔ LPs (double arrow)
const iarrowY = iy + ih * 0.28;
ctx.save();
ctx.strokeStyle = C.gray; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
ctx.beginPath(); ctx.moveTo(ix + iw + 4, iarrowY); ctx.lineTo(lx - 4, iarrowY); ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = C.gray;
ctx.beginPath(); ctx.moveTo(lx - 10, iarrowY - 4); ctx.lineTo(lx - 10, iarrowY + 4); ctx.lineTo(lx, iarrowY); ctx.closePath(); ctx.fill();
ctx.beginPath(); ctx.moveTo(ix + iw + 10, iarrowY - 4); ctx.lineTo(ix + iw + 10, iarrowY + 4); ctx.lineTo(ix + iw, iarrowY); ctx.closePath(); ctx.fill();
txt("navegação", (ix + iw + lx) / 2, iarrowY - 8, "Outfit", 10, C.gray, "center");
ctx.restore();

// ── DOWN ARROWS to conversion ─────────────────────────────────────────────────
const domBottom = domY + domH;
const convBoxY  = 680;

// converging points
const pts = [
  { x: 262, color: C.blue  },
  { x: 595, color: C.gray  },
  { x: 978, color: C.green },
];
pts.forEach(({ x, color }) => arrowV(x, domBottom + 4, convBoxY - 2, color, 2.5));

// horizontal merge line
ctx.save();
ctx.strokeStyle = C.green; ctx.lineWidth = 1.8; ctx.setLineDash([4, 3]);
ctx.beginPath(); ctx.moveTo(262, convBoxY - 2); ctx.lineTo(978, convBoxY - 2); ctx.stroke();
ctx.setLineDash([]);
ctx.restore();

// ── CONVERSION BOX ───────────────────────────────────────────────────────────
const cbW = 520, cbH = 86;
const cbX = (W - cbW) / 2, cbY = convBoxY;

setShadow(22, "rgba(22,163,74,0.30)", 0, 8);
rr(cbX, cbY, cbW, cbH, 16, C.green);
clearShadow();

ctx.fillStyle = "rgba(255,255,255,0.18)";
ctx.beginPath(); ctx.arc(cbX + 52, cbY + 43, 24, 0, Math.PI * 2); ctx.fill();
txt("✆", cbX + 52, cbY + 51, "Bricolage", 26, C.white, "center");

txt("Consulta via WhatsApp", cbX + 90, cbY + 36, "Bricolage", 18, C.white);
txt("Conversão direta — atendimento especializado", cbX + 90, cbY + 62, "Outfit", 12.5, "rgba(255,255,255,0.78)");

// ── TOPIC CLUSTER BADGES ─────────────────────────────────────────────────────
setShadow(5, "rgba(30,58,95,0.10)", 0, 2);
rr(40, 798, 360, 28, 8, "#e0f2fe");
clearShadow();
txt("📌  Direito Bancário  ·  Financiamento Veicular  ·  Busca e Apreensão", 220, 817, "OutfitBold", 11, "#0369a1", "center");

setShadow(5, "rgba(30,58,95,0.10)", 0, 2);
rr(W - 400, 798, 360, 28, 8, "#f0fdf4");
clearShadow();
txt("✓  E-E-A-T  ·  Author Schema  ·  JSON-LD  ·  Topic Clusters", W - 220, 817, "OutfitBold", 11, C.green, "center");

// ── AUTHORITY FOOTER ─────────────────────────────────────────────────────────
setShadow(14, "rgba(30,58,95,0.22)", 0, 5);
rr(40, 840, W - 80, 58, 12, C.navy);
clearShadow();

const steps = [
  "Um único domínio",
  "Autoridade concentrada",
  "Topic clusters por nicho",
  "Google vê especialista",
  "Posição privilegiada na SERP",
];
const sw = (W - 80) / steps.length;
steps.forEach((step, i) => {
  const sx = 40 + i * sw + sw / 2;
  txt(step, sx, 874, "OutfitBold", 12.5, C.white, "center");
  if (i < steps.length - 1) {
    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.2)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(40 + (i + 1) * sw, 848); ctx.lineTo(40 + (i + 1) * sw, 890); ctx.stroke();
    ctx.restore();
    txt("→", 40 + (i + 1) * sw, 874, "OutfitBold", 14, "rgba(255,255,255,0.45)", "center");
  }
});

// ── save ─────────────────────────────────────────────────────────────────────
const out = path.join("public", "arquitetura-digital-mrm.png");
fs.writeFileSync(out, canvas.toBuffer("image/png"));
console.log("✓ Salvo em:", path.resolve(out));
