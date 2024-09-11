import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';

// Load environment variables from .env
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),],
})
