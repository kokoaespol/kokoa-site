import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { kokoa_theme } from "./kokoa-theme";

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [kokoa_theme],
      },
    }),
  ],
} satisfies Config;

export default config;
