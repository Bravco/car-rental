export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@invictus.codes/nuxt-vuetify",
    "nuxt3-leaflet",
  ],
  css: [
    "@/assets/main.css",
  ],
})