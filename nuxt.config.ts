import { baseURL } from "nuxt/dist/core/runtime/nitro/paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    // { src: '~/plugins/axios.js', mode: 'client' },
    // { src: '~/plugins/vuetify.js', mode: 'client' },
    { src: '~/plugins/i18n.js', mode: 'client' },
    { src: '~/plugins/pinia.js', mode: 'client' },
  ],
 


  // runtimeConfig: {
  //   public: {
  //     baseURL: process.env.BASE_URL || 'https://backend.shalpouts.com/api',
  //   },
  // },
  
  modules: [
    'nuxt-snackbar',
    'nuxt3-vuex-module',
    // '@element-plus/nuxt',
    '@pinia/nuxt',
    'nuxt-particles',
    '@nuxtjs/i18n',
    '@invictus.codes/nuxt-vuetify',
    
    
  ],
  snackbar: {
    top: true,
    right: true,
    duration: 5000
  },
  

  
  app: {
    // baseURL: "https://backend.shalpouts.com/api/",

    head: {
      link: [
       {rel: 'stylesheet', href: 'https://unpkg.com/element-plus/dist/index.css' },
       { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
   ],
   script: [
      { type:"text/javascript", src: 'https://unpkg.com/vue@3/dist/vue.global.js' },
      { type:"text/javascript",  src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' },
      // { type:"text/javascript", hid:"main", defer:true,  src: 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.5.1/vuex.min.js' },
      // { type:"text/javascript", hid:"main", defer:true,  src: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.30/vue.global.min.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', defer: true },
      // { type:"text/javascript", hid:"main", defer:true,  src: '/assets/js/particle.js' },
      { type:"text/javascript", hid:"main", defer:true,  src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js' },
    ],
  }

},
  

  css: ['assets/css/style.css', ],
  
})
