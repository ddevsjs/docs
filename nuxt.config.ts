// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.lang.json",
      },
      {
        code: "pt-BR",
        iso: "pt-BR",
        name: "Português(BR)",
        file: "pt-BR.lang.json",
      },
    ],
    defaultLocale: "pt-BR",
  },
});