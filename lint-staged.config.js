export default {
  '*.{js,ts,tsx}': 'eslint --cache',
  '*.{js,ts,tsx,css,md}': 'prettier --check',
  'src/**/*.{ts,tsx}': () => 'tsc --noEmit -p tsconfig.app.json',
  './*.ts': () => 'tsc --noEmit -p tsconfig.node.json',
}
