export default defineAppConfig({
  icon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
    mode: "svg", // default <Icon> mode applied
    aliases: {
      logo: "heroicons:bolt",
    },
    cssLayer: "base", // set the css layer to inject to
  },
});
