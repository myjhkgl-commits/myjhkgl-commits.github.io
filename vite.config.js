import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPage = repository?.toLowerCase().endsWith('.github.io')

export default defineConfig({
  // GitHub Pages project sites are served from /<repository>/.
  // User/organization sites (<owner>.github.io) are served from /.
  base: repository && !isUserOrOrgPage ? `/${repository}/` : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false
  }
})
