import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  // GitHub Pages project sites are served from /<repository>/; local previews stay at /.
  base: repository ? `/${repository}/` : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false
  }
})
