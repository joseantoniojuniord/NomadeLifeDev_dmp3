import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Define caminhos relativos para uso em produção
  plugins: [react()],
});
