export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca
        brand: {
          primary: '#1e7a8c',
          secondary: '#2a9eb3',
          grayLight: '#f8f9fa',
          text: '#333333',
          white: '#ffffff',
        },
        // Mapea las utilidades blue-* a tonos de marca para mantener compatibilidad con el código existente
        blue: {
          700: '#1e7a8c',
          800: '#15606f',
          900: '#0f4a56',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
    },
  },
  plugins: [],
}