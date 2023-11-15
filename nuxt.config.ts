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
    { src: '~/plugins/axios.js', mode: 'client' },
    { src: '~/plugins/element-plus.js', mode: 'client' },
    { src: '~/plugins/i18n.js', mode: 'client' },
    { src: '~/plugins/particles.js', mode: 'client' },
   
  ],

  modules: [
    'nuxt3-vuex-module',
    '@element-plus/nuxt',
  ],
  app: {
    head: {
      link: [
       
       {rel: 'stylesheet', href: 'https://unpkg.com/element-plus/dist/index.css' } 
   ],
   script: [
      { type:"text/javascript", hid:"main", defer:true,  src: 'https://unpkg.com/vue@3/dist/vue.global.js' },
      { type:"text/javascript", hid:"main", defer:true,  src: 'https://unpkg.com/element-plus' },
      { type:"text/javascript", hid:"main", defer:true,  src: 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.5.1/vuex.min.js' },
      { type:"text/javascript", hid:"main", defer:true,  src: 'https://unpkg.com/vue@3/dist/vue.global.js' },
      { type:"text/javascript", hid:"main", defer:true,  src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js' },
    ],
  }
},
  
  css: [
    '~/assets/css/style.css',
   
  ],
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'css',
    themes: ['dark'],
  },
})
