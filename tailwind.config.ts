import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				fira: ["Fira Code Variable", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [forms({ strategy: "class" }), typography],
} satisfies Config;
