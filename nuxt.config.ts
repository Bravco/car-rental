export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@invictus.codes/nuxt-vuetify",
  ],
  css: [
    "@/assets/main.css",
  ],
})