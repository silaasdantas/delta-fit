// Resolve the runner from the web package, without a second package/lockfile.
import { test, expect } from '../../apps/web/node_modules/@playwright/test';

test('cadastro real, UUID e recarga', async ({ page, request }) => {
  const name = `Agachamento sintético ${Date.now()}`;
  await page.goto('/exercises');
  await page.getByLabel('Nome', { exact: true }).fill(`  ${name}  `);
  const posted = page.waitForResponse(r => r.url().endsWith('/api/exercises') && r.request().method() === 'POST');
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  const response = await posted;
  expect(response.status()).toBe(201);
  const created = await response.json();
  expect(created.id).toMatch(/^[0-9a-f-]{36}$/);
  expect(created.name).toBe(name);
  await expect(page.getByRole('status')).toHaveText('Exercício salvo.');
  await page.reload();
  await expect(page.getByRole('listitem').filter({ hasText: name })).toBeVisible();
  const list = await request.get('http://127.0.0.1:5175/api/exercises');
  expect(await list.json()).toContainEqual(created);
});

test('validação do servidor mantém texto e não cria registro', async ({ page }) => {
  await page.goto('/exercises');
  await page.getByLabel('Nome', { exact: true }).fill('   ');
  const response = page.waitForResponse(r => r.request().method() === 'POST');
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  expect((await response).status()).toBe(400);
  await expect(page.getByRole('main').getByRole('alert')).toHaveText('Informe o nome do exercício.');
  await expect(page.getByLabel('Nome', { exact: true })).toHaveValue('   ');
});

test('POST interrompido não exibe sucesso nem perde texto', async ({ page }) => {
  await page.goto('/exercises');
  await expect(page.getByRole('button', { name: 'Consultar lista' })).toBeEnabled();
  await page.route('**/api/exercises', route => route.request().method() === 'POST' ? route.abort() : route.continue());
  await page.getByLabel('Nome', { exact: true }).fill('Nome preservado');
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  await expect(page.getByRole('main').getByRole('alert')).toContainText('Não foi possível confirmar');
  await expect(page.getByLabel('Nome', { exact: true })).toHaveValue('Nome preservado');
  await expect(page.getByText('Exercício salvo.', { exact: true })).toHaveCount(0);
});

test('GET indisponível é distinguível de lista vazia e pode ser consultado novamente', async ({ page }) => {
  await page.route('**/api/exercises', route => route.abort());
  await page.goto('/exercises');
  await expect(page.getByRole('main').getByRole('alert')).toContainText('Não foi possível atualizar a lista');
  await expect(page.getByText('Nenhum exercício cadastrado.')).toHaveCount(0);
  await page.unroute('**/api/exercises');
  await page.getByRole('button', { name: 'Consultar lista' }).click();
  await expect(page.getByRole('main').getByRole('alert')).toHaveCount(0);
});

test('falha ao consultar não nega cadastro já confirmado', async ({ page }) => {
  await page.goto('/exercises');
  await page.getByLabel('Nome', { exact: true }).fill(`Cadastro confirmado ${Date.now()}`);
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText('Exercício salvo.');
  await page.route('**/api/exercises', route => route.request().method() === 'GET' ? route.abort() : route.continue());
  await page.getByRole('button', { name: 'Consultar lista' }).click();
  await expect(page.getByRole('main').getByRole('alert')).toContainText('Não foi possível atualizar a lista');
  await expect(page.getByText('Exercício salvo.', { exact: true })).toBeVisible();
});
