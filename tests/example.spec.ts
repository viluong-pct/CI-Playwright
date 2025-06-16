import { test, expect } from "@playwright/test";

test("should load homepage", async ({ page }) => {
  await page.goto("/talent/issue/feature/4/");
  await expect(page).toHaveTitle(
    /副業・フリーランス案件特集 | 求む！挑戦者。 スタートアップ案件特集/
  );
});
