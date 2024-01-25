// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['./assets/css/main.css'],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat:true,
        Manrope: true
      }
    }],
    'nuxt-svgo',
    '@pinia/nuxt'
  ]
});
