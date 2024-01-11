import { resolve } from "path";
import { defineConfig, defaultExclude } from "vitest/config";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "solzu",
      fileName: "solzu",
      formats: ["es", "umd"],
    },
    minify: true,
  },
  plugins: [dts()],
  test: {
    exclude: [...defaultExclude, "**/*@common.test.ts"],
  },
});
