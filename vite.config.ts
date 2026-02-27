import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["hackdays.infinitude.top"],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
