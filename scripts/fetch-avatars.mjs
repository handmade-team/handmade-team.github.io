// 마크 머리 이미지를 받아 public/crew/<mcName>.png 로 저장한다.
// 사용: npm run avatars            (없는 것만 받기)
//       npm run avatars -- --force  (전부 다시 받기, 스킨 변경 시)
import { mkdir, writeFile, access } from 'node:fs/promises';
import { crew } from '../src/data/crew.ts';

const OUT_DIR = new URL('../public/crew/', import.meta.url);
const SIZE = 256;
const force = process.argv.includes('--force');

const sources = [
  name => `https://cravatar.eu/helmhead/${name}/${SIZE}`,
  name => `https://mc-heads.net/head/${name}/${SIZE}`,
  name => `https://minotar.net/cube/${name}/${SIZE}`,
];

async function exists(url) {
  try {
    await access(url);
    return true;
  } catch {
    return false;
  }
}

async function download(name) {
  for (const source of sources) {
    const url = source(name);
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
      if (!res.ok || !res.headers.get('content-type')?.startsWith('image/')) {
        throw new Error(`HTTP ${res.status}`);
      }
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      console.warn(`  ${url} 실패: ${err.message}`);
    }
  }
  return null;
}

await mkdir(OUT_DIR, { recursive: true });

const names = [...new Set(crew.map(m => m.mcName).filter(Boolean))];
const failed = [];

for (const name of names) {
  const file = new URL(`${name}.png`, OUT_DIR);
  if (!force && (await exists(file))) {
    console.log(`- ${name} (있음, 건너뜀)`);
    continue;
  }
  const data = await download(name);
  if (data) {
    await writeFile(file, data);
    console.log(`✓ ${name}`);
  } else {
    failed.push(name);
    console.error(`✗ ${name} (기존 파일 유지)`);
  }
}

if (failed.length) {
  console.error(`\n실패 ${failed.length}개: ${failed.join(', ')}`);
  process.exitCode = 1;
}
