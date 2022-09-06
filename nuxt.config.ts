import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            backendUrl: ''
        }
    },
    modules: [
        '@vueuse/nuxt'
    ]
})
