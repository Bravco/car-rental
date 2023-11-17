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
  app: {
    head: {
      htmlAttrs: {
        lang: "sk",
      },
      title: "Najlacnejšia autopožičovňa",
      meta: [
        {
          name: "author",
          content: "Andrej Hamráček",
        },
        {
          name: "title",
          content: "EasyCar.sk - Najlacnejšia Autopožičovňa",
        },
        {
          name: "description",
          content: "Najlacnejšia autopožičovňa. Autopožičovňa v mestách Poprad, Kežmarok, Levoča, Spišská Nová Ves. Letisko Poprad, autobusová a vlaková stanica Poprad.",
        },
      ],
    },
  },
  image: {
    provider: "netlify",
    netlify: process.env.IMAGES_URL,
  },
})