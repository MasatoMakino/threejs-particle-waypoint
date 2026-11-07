import { webdriverio } from "@vitest/browser-webdriverio";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: webdriverio({
        capabilities: {
          // @vitest/browser-webdriverio 5.0.0 switches frames with switchFrame,
          // which WebdriverIO 10 removed for WebDriver BiDi sessions.
          // Removal condition: the provider switches frames in BiDi sessions.
          "wdio:enforceWebDriverClassic": true,
          "goog:chromeOptions": {
            args: ["--use-gl=angle", "--use-angle=swiftshader"],
          },
        },
      }),
      headless: true,
      instances: [{ browser: "chrome" }],
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
});
