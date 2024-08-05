import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				fira: ["Fira Code", "mono-space"],
			},
		},
	},
	plugins: [forms({ strategy: "class" }), typography],
} satisfies Config;
