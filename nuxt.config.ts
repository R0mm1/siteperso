export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            backendUrl: ''
        }
    },
    modules: [
        '@vueuse/nuxt'
    ],
    build: {
        transpile: [
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome'
        ]
    }
})
