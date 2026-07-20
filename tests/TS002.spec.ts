// To provide actual test scripts for TC002

import { test, expect } from "@playwright/test";
import { General } from "../lib/General";

test("TC002 - Valid username with invalid password should show validation", async ({ page }) => {
  const obj = new General(page);

  await obj.openApplication();
  await obj.login("sureshit", "wrongpassword");

  await expect(page.locator("strong")).toContainText("Invalid Login");
});