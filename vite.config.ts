import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),    wasm(),
    topLevelAwait(),],
    worker: {
      // Not needed with vite-plugin-top-level-await >= 1.3.0
      // format: "es",
      plugins: [
       wasm(),
        topLevelAwait()
      ]
    }
})
