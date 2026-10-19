import { createRequire } from 'node:module';
const require = createRequire(new URL('./apps/web/package.json', import.meta.url));
const { defineConfig, globalIgnores } = require('eslint/config');
const js = require('@eslint/js');
const ts = require('typescript-eslint');
const hooks = require('eslint-plugin-react-hooks');
export default defineConfig([
  js.configs.recommended, ...ts.configs.recommended,
  { files: ['**/*.tsx'], plugins: { 'react-hooks': hooks }, rules: hooks.configs.recommended.rules },
  globalIgnores(['**/.next/**', '**/node_modules/**', '**/next-env.d.ts', '**/playwright-report/**', '**/test-results/**'])
]);
