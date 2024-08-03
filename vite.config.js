import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dotenv from 'dotenv';

// Load environment variables from src/.env
dotenv.config({ path: resolve(__dirname, 'src/.env') });

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
});
