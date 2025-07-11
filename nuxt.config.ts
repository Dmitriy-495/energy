import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  devtools: { enabled: false },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title:
        "СК Энергия | Приборы и узлы учета тепловой энергии, электроэнергии, газа и воды",
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      "Open Sans": {
        wght: "300..800",
        ital: "300..800",
      },
    },
  },

  icon: {
    mode: "svg",
    aliases: {
      energy: "heroicons:bolt-solid",
      cog: "heroicons:cog-6-tooth-solid",
      scale: "heroicons:scale-solid",
      build: "heroicons:building-office-solid",
      computer: "heroicons:computer-desktop-solid",
      bars: "heroicons:bars-3-solid",
      xMark: "heroicons:x-mark-solid",
      globe: "heroicons:globe-alt-solid",
      phone: "heroicons:phone-solid",
      wrench: "heroicons:wrench-screwdriver-16-solid",
      pencil: "heroicons:pencil-square-solid",
      check: "heroicons:check-circle-16-solid",
    },
  },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
      },
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],

  plugins: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
