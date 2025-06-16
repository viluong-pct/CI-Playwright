import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  //   globalSetup: require.resolve("./tests/global-setup"),
  //   globalTeardown: require.resolve("./tests/global-teardown"),
  reporter: [["html", { outputFolder: "playwright-report" }]],
});
