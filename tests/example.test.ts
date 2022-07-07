import { describe, expect, it } from "vitest";
import { setup, $fetch, isDev } from "@nuxt/test-utils-edge";

describe("example", async () => {
  await setup({});

  it("Renders Hello world", async () => {
    expect(await $fetch("/")).toMatch("Hello, world!");
  });

  if (isDev()) {
    it("[dev] ensure vite client script is added", async () => {
      expect(await $fetch("/")).toMatch('/_nuxt/@vite/client"');
    });
  }
});
