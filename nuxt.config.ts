// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt3-app',
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
        ]
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    vite: {
        define: {
        "process.env.DEBUG": false
        }
    },
})
