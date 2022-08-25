import {defineNuxtConfig} from "nuxt";

defineNuxtConfig({
    runtimeConfig: {
        public: {
            backendUrl: 'test'
        }
    },
    modules: [
        '@vueuse/nuxt'
    ]
})
