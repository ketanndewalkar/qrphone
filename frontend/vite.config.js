import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  extend:{
    backgroundImage: {
        'radial-custom': 'radial-gradient(closest-side, rgba(255, 139, 139, 1), #0000ff)',
      },
    keyframes: {
        redGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.5)' }, // red-500
          '50%': { boxShadow: '0 0 8px 4px rgba(239, 68, 68, 0.7)' },
        },
      },
      animation: {
        outlinePulse: 'redGlow 1.5s ease-in-out infinite',
      },
  }
})
