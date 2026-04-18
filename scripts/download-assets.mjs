import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const assets = [
  {
    url: "https://lp-veiculo.lbassessoriajuridica.com.br/assets/LB%20-%20horizontal%20-%20azulmarinho-rtC3BoVv.png",
    dest: "public/images/logo-lb-horizontal.png",
  },
  {
    url: "https://lp-veiculo.lbassessoriajuridica.com.br/assets/leidy-foto-BzkDd0lh.jpeg",
    dest: "public/images/leidy-foto.jpeg",
  },
  {
    url: "https://lp-veiculo.lbassessoriajuridica.com.br/favicon.png",
    dest: "public/seo/favicon.png",
  },
];

async function download(url, dest) {
  mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log(`✓ ${dest}`);
}

async function main() {
  const results = await Promise.allSettled(assets.map((a) => download(a.url, a.dest)));
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`✗ ${assets[i].dest}: ${r.reason}`);
  });
}

main();
