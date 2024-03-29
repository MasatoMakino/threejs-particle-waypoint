import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "jsdomTest",
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
