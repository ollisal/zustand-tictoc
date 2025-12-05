This is a small React project written in Typescript.

React version: 19
State management: Zustand
Build tool: Vite
Linting: ESLint
Formatting: Prettier
Dependency management: pnpm

Using recent versions, look in package.json for details.

Modern conventions:

- Functional components with hooks
- no `any` typing
- Do not use deprecated APIs
- Consistent formatting based on .prettierrc and .editorconfig
- Assume recent evergreen browser CSS support
- Use ESM imports/exports in both app and scaffolding (package.json is configured with "type": "module")

Styling with stylex:

- Do not use shorthand properties like "margin", "animation" but individual attributes like "animationName" etc
- More details see eslint.config.js stylex rules
