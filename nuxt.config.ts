// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
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
        Manrope: true,
        Marcellus:true,
        Quattrocento:[400, 700],
        Lobster: true
      }
    }],
    'nuxt-svgo',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    
  ],
});
