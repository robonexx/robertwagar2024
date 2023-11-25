import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    VITE_SENDER_ID: process.env.VITE_SENDER_ID,
    VITE_TEMP_ID: process.env.VITE_TEMP_ID,
    VITE_KEY: process.env.VITE_KEY,
    VITE_PRIVATE: process.env.VITE_PRIVAT,
  },
});
