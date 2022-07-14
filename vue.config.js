const { defineConfig } = require("@vue/cli-service");
const UnoCSS = require("@unocss/webpack").default;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      UnoCSS(),
      require("unplugin-auto-import/webpack")({
        /* options */
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ["vue", "vue-router", "@vueuse/core"],
        dirs: ["src/hooks", "src/store", "src/utils", "src/api"],
        dts: "src/auto-import.d.ts",
      }),
      require("unplugin-vue-components/webpack")({
        /* options */
        dirs: ["src/components"],
        extensions: ["vue"],
        deep: true,
        dts: "src/components.d.ts",
        resolvers: [],
      }),
    ],
  },
});
