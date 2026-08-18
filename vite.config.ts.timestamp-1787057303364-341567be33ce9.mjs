// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import fs from "fs";
var __vite_injected_original_dirname = "/home/project";
function copyPublicManually() {
  return {
    name: "copy-public-safely",
    enforce: "post",
    apply: "build",
    config() {
      return { publicDir: false };
    },
    closeBundle() {
      const publicDir = path.resolve(__vite_injected_original_dirname, "public");
      const outDir = path.resolve(__vite_injected_original_dirname, "dist");
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
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), copyPublicManually()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmZ1bmN0aW9uIGNvcHlQdWJsaWNNYW51YWxseSgpOiBpbXBvcnQoJ3ZpdGUnKS5QbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdjb3B5LXB1YmxpYy1zYWZlbHknLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBjb25maWcoKSB7XG4gICAgICByZXR1cm4geyBwdWJsaWNEaXI6IGZhbHNlIH07XG4gICAgfSxcbiAgICBjbG9zZUJ1bmRsZSgpIHtcbiAgICAgIGNvbnN0IHB1YmxpY0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKTtcbiAgICAgIGNvbnN0IG91dERpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jyk7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocHVibGljRGlyKSkgcmV0dXJuO1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZzLnJlYWRkaXJTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGF0aC5qb2luKHB1YmxpY0RpciwgZmlsZSk7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLmpvaW4ob3V0RGlyLCBmaWxlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGluZyB1bnJlYWRhYmxlIGZpbGU6ICR7ZmlsZX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgY29weVB1YmxpY01hbnVhbGx5KCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxRQUFRO0FBSGYsSUFBTSxtQ0FBbUM7QUFLekMsU0FBUyxxQkFBNEM7QUFDbkQsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsU0FBUztBQUNQLGFBQU8sRUFBRSxXQUFXLE1BQU07QUFBQSxJQUM1QjtBQUFBLElBQ0EsY0FBYztBQUNaLFlBQU0sWUFBWSxLQUFLLFFBQVEsa0NBQVcsUUFBUTtBQUNsRCxZQUFNLFNBQVMsS0FBSyxRQUFRLGtDQUFXLE1BQU07QUFDN0MsVUFBSSxDQUFDLEdBQUcsV0FBVyxTQUFTLEVBQUc7QUFDL0IsaUJBQVcsUUFBUSxHQUFHLFlBQVksU0FBUyxHQUFHO0FBQzVDLGNBQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxJQUFJO0FBQ3JDLGNBQU0sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJO0FBQ25DLFlBQUk7QUFDRixhQUFHLGFBQWEsS0FBSyxJQUFJO0FBQUEsUUFDM0IsUUFBUTtBQUNOLGtCQUFRLEtBQUssNkJBQTZCLElBQUksRUFBRTtBQUFBLFFBQ2xEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO0FBQUEsRUFDdkMsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
