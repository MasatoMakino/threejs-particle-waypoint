import { webdriverio } from "@vitest/browser-webdriverio";
import { defineConfig } from "vitest/config";

// The DevContainer sets both to the Debian packages. CI leaves them unset and
// uses the runner's Chrome with a driver that WebdriverIO downloads.
const chromeBinary = process.env.CHROME_BIN;
const chromedriverBinary = process.env.CHROMEDRIVER_BIN;

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
            // The DevContainer keeps the default seccomp profile, which blocks the
            // user namespaces that the Chromium sandbox needs.
            args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader"],
            ...(chromeBinary && { binary: chromeBinary }),
          },
          ...(chromedriverBinary && {
            "wdio:chromedriverOptions": { binary: chromedriverBinary },
          }),
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
