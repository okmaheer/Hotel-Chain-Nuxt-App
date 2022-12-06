export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "NuxtBnb: %s",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: []
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi',
    '~/plugins/auth.client',

  ],
  modules: ['~/modules/test'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/sass/app.scss'
  ],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  },
  publicRuntimeConfig: {
    auth:{
      cookieName: 'idToken',
      clientId: '998555443613-ck6bj87lr6291k2062ke5u6undjk0cb2.apps.googleusercontent.com'
    },
  },
  privateRuntimeConfig: {

  }

}
