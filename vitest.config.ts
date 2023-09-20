import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "jsdomTest",
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
    },
  },
});
