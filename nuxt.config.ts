import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title:
        "СК Энергия | Приборы учета тепловой энергии, электроэнергии, газа и воды",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { charset: "UTF-8" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:200,500,600,700,950&display=swap",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon", "@nuxt/image"],
});
