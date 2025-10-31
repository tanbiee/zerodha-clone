import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
        // 💡 CRUCIAL FIX: Makes 'describe', 'test', and 'expect' globally available
        globals: true, 
        setupFiles: './setupTests.js', // Still needed for toBeInTheDocument()
        environment: 'jsdom',
      },
})
