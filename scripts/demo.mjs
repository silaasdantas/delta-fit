import { chromium } from '../apps/web/node_modules/@playwright/test/index.mjs';
import { spawn, execFileSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const apiUrl = 'http://127.0.0.1:5075/api/exercises';
const pageUrl = 'http://127.0.0.1:3000/exercises';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function freePort(port) {
  const server = createServer();
  await new Promise((resolve, reject) => server.once('error', reject).listen(port, '127.0.0.1', resolve));
  await new Promise(resolve => server.close(resolve));
}
async function ready(url) {
  for (let i = 0; i < 120; i++) {
    try { if ((await fetch(url)).ok) return; } catch { /* process/database starting */ }
    await delay(500);
  }
  throw new Error(`Serviço não iniciou: ${url}`);
}
function start(file, args, kind, env = process.env, cwd = process.cwd()) {
  const log = createWriteStream(`.local/demo-${kind}.log`, { flags: 'a' });
  const child = spawn(file, args, { env, cwd, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
  child.stdout.pipe(log); child.stderr.pipe(log);
  child.once('error', error => log.write(`${error.name}\n`));
  child.once('close', () => log.end());
  return child;
}
async function stop(child) {
  if (!child || child.exitCode !== null) return;
  const exited = new Promise(resolve => child.once('exit', resolve));
  child.kill(); await exited;
}
function startApi() { return start('dotnet', ['apps/api/DeltaFit.Api/bin/Debug/net10.0/DeltaFit.Api.dll', '--urls', 'http://127.0.0.1:5075'], 'api'); }
let api, web, browser;
const evidence = { startedAt: new Date().toISOString(), checks: [] };
try {
  await freePort(5075); await freePort(3000);
  api = startApi();
  web = start(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3000'], 'web', { ...process.env, ConnectionStrings__Database: '', DELTAFIT_DB_PASSWORD: '', DELTAFIT_INTEGRATION_CONNECTION: '' }, resolve('apps/web'));
  await ready(apiUrl); await ready(pageUrl);
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1100, height: 850 } });
  await page.goto(pageUrl);
  const name = `Demonstração sintética ${Date.now()}`;
  await page.getByLabel('Nome', { exact: true }).fill(`  ${name}  `);
  const posted = page.waitForResponse(r => r.url() === apiUrl && r.request().method() === 'POST');
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  const response = await posted; assert.equal(response.status(), 201);
  const record = await response.json(); assert.equal(record.name, name);
  evidence.record = record;
  await page.reload();
  await page.getByRole('listitem').filter({ hasText: name }).waitFor();
  evidence.checks.push('Criação pela tela e recarga com API/PostgreSQL reais');
  await page.screenshot({ path: '.local/demo.png', fullPage: true });
  await stop(api); api = startApi(); await ready(apiUrl);
  assert((await (await fetch(apiUrl)).json()).some(item => item.id === record.id && item.name === name));
  evidence.checks.push('Mesmo UUID/nome após reiniciar processo da API');
  execFileSync('docker', ['compose', 'restart', 'db'], { stdio: 'pipe', windowsHide: true });
  await ready(apiUrl);
  assert((await (await fetch(apiUrl)).json()).some(item => item.id === record.id && item.name === name));
  evidence.checks.push('Mesmo UUID/nome após reiniciar PostgreSQL sem remover volume');
  await page.getByLabel('Nome', { exact: true }).fill('   ');
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  await page.getByRole('alert').filter({ hasText: 'Informe o nome' }).waitFor();
  assert.equal(await page.getByLabel('Nome', { exact: true }).inputValue(), '   ');
  evidence.checks.push('Validação real pela tela; texto preservado');
  await stop(api);
  const unsaved = `Falha sintética ${Date.now()}`;
  await page.getByLabel('Nome', { exact: true }).fill(unsaved);
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  await page.getByRole('alert').filter({ hasText: 'Não foi possível confirmar' }).waitFor();
  assert.equal(await page.getByLabel('Nome', { exact: true }).inputValue(), unsaved);
  assert.equal(await page.getByText('Exercício salvo.', { exact: true }).count(), 0);
  api = startApi(); await ready(apiUrl);
  assert(!(await (await fetch(apiUrl)).json()).some(item => item.name === unsaved));
  evidence.checks.push('API realmente parada: erro sem sucesso falso e texto preservado; retomada confirmada');
  evidence.completedAt = new Date().toISOString();
  await writeFile('.local/demo.json', JSON.stringify(evidence, null, 2));
  console.log(JSON.stringify(evidence, null, 2));
} finally {
  await browser?.close(); await stop(api); await stop(web);
}
