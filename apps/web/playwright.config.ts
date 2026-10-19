import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: '../../tests/e2e', workers: 1, fullyParallel: false, retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://127.0.0.1:3100', browserName: 'chromium', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  webServer: [
    { command: 'dotnet run --no-build --no-launch-profile --project ../api/DeltaFit.Api --urls http://127.0.0.1:5175', url: 'http://127.0.0.1:5175/api/exercises', reuseExistingServer: false, timeout: 60000 },
    { command: 'npm run start -- --port 3100', url: 'http://127.0.0.1:3100/exercises', reuseExistingServer: false, timeout: 60000, env: { ConnectionStrings__Database: '', DELTAFIT_DB_PASSWORD: '', DELTAFIT_INTEGRATION_CONNECTION: '' } }
  ]
});
