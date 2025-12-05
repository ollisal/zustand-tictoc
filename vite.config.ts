import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babelConfig from './babel.config.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: babelConfig.plugins,
      },
    }),
  ],
})
