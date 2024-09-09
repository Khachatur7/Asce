import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // или укажите конкретный IP-адрес, например '192.168.100.70'
    port: 5173, // или любой другой порт, который вы хотите использовать
  }
})
