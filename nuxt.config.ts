// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  
  devtools: { enabled: true },
  
  ssr:true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      title: 'СК Энергия', // default fallback title

      htmlAttrs: { lang: 'ru', },
      
      meta: [
        {name: 'http-equiv', content: 'XDEContent-Type'},
        {name: 'content', content: 'text/html'},
      ],

      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]    
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-1BGPNWZ4TC'
  }
})