import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function copyPublicManually(): import('vite').Plugin {
  return {
    name: 'copy-public-safely',
    enforce: 'post',
    apply: 'build',
    config() {
      return { publicDir: false };
    },
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(publicDir)) return;
      for (const file of fs.readdirSync(publicDir)) {
        const src = path.join(publicDir, file);
        const dest = path.join(outDir, file);
        try {
          fs.copyFileSync(src, dest);
        } catch {
          console.warn(`Skipping unreadable file: ${file}`);
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicManually()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
