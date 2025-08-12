const icons = import.meta.glob("$lib/assets/icons/stack/*", {
	eager: true,
	import: "default",
});
const iconMapping: Record<string, string> = {
	svelte: "/src/lib/assets/icons/stack/svelte.svg",
	vue: "/src/lib/assets/icons/stack/vue.svg",
	react: "/src/lib/assets/icons/stack/react.svg",
	angular: "/src/lib/assets/icons/stack/angular.svg",
	nextjs: "/src/lib/assets/icons/stack/nextjs.svg",
	astro: "/src/lib/assets/icons/stack/astro.svg",
	typescript: "/src/lib/assets/icons/stack/typescript.svg",
	javascript: "/src/lib/assets/icons/stack/javascript.svg",
	python: "/src/lib/assets/icons/stack/python.svg",
	rust: "/src/lib/assets/icons/stack/rust.svg",
	java: "/src/lib/assets/icons/stack/java.svg",
	php: "/src/lib/assets/icons/stack/php.svg",
	c: "/src/lib/assets/icons/stack/c.svg",
	cpp: "/src/lib/assets/icons/stack/cpp.svg",
	go: "/src/lib/assets/icons/stack/go.svg",
	ruby: "/src/lib/assets/icons/stack/ruby.svg",
	nodejs: "/src/lib/assets/icons/stack/nodejs.svg",
	express: "/src/lib/assets/icons/stack/express.svg",
	flask: "/src/lib/assets/icons/stack/flask.svg",
	django: "/src/lib/assets/icons/stack/django.svg",
	laravel: "/src/lib/assets/icons/stack/laravel.svg",
	springboot: "/src/lib/assets/icons/stack/springboot.svg",
	css: "/src/lib/assets/icons/stack/css.svg",
	html: "/src/lib/assets/icons/stack/html.svg",
	bootstrap: "/src/lib/assets/icons/stack/bootstrap.svg",
	tailwindcss: "/src/lib/assets/icons/stack/tailwindcss.svg",
	sass: "/src/lib/assets/icons/stack/sass.svg",
	vite: "/src/lib/assets/icons/stack/vite.svg",
	webpack: "/src/lib/assets/icons/stack/webpack.svg",
	babel: "/src/lib/assets/icons/stack/babel.svg",
	figma: "/src/lib/assets/icons/stack/figma.svg",
	canva: "/src/lib/assets/icons/stack/canva.svg",
	ps: "/src/lib/assets/icons/stack/ps.svg",
	ai: "/src/lib/assets/icons/stack/ai.svg",
	ae: "/src/lib/assets/icons/stack/ae.svg",
	sketch: "/src/lib/assets/icons/stack/sketch.svg",
	inkscape: "/src/lib/assets/icons/stack/inkscape.svg",
	adobephotoshop: "/src/lib/assets/icons/stack/adobephotoshop.svg",
	adobeillustrator: "/src/lib/assets/icons/stack/adobeillustrator.svg",
	adobeindesign: "/src/lib/assets/icons/stack/adobeindesign.svg",
	adobexd: "/src/lib/assets/icons/stack/adobexd.svg",
	affinitydesigner: "/src/lib/assets/icons/stack/affinitydesigner.svg",
	coreldraw: "/src/lib/assets/icons/stack/coreldraw.svg",
	gimp: "/src/lib/assets/icons/stack/gimp.svg",
	krita: "/src/lib/assets/icons/stack/krita.svg",
	arduino: "/src/lib/assets/icons/stack/arduino.svg",
	raspberrypi: "/src/lib/assets/icons/stack/raspberrypi.svg",
	proteus: "/src/lib/assets/icons/stack/proteus.svg",
	kicad: "/src/lib/assets/icons/stack/kicad.svg",
	eagle: "/src/lib/assets/icons/stack/eagle.svg",
	altiumdesigner: "/src/lib/assets/icons/stack/altiumdesigner.svg",
	plc: "/src/lib/assets/icons/stack/plc.svg",
	simaticstep7: "/src/lib/assets/icons/stack/simaticstep7.svg",
	tiaportal: "/src/lib/assets/icons/stack/tiaportal.svg",
	labview: "/src/lib/assets/icons/stack/labview.svg",
	blender: "/src/lib/assets/icons/stack/blender.svg",
	fusion360: "/src/lib/assets/icons/stack/fusion360.svg",
	autocad: "/src/lib/assets/icons/stack/autocad.svg",
	freecad: "/src/lib/assets/icons/stack/freecad.svg",
	nxsiemens: "/src/lib/assets/icons/stack/nxsiemens.svg",
	unity: "/src/lib/assets/icons/stack/unity.svg",
	ros: "/src/lib/assets/icons/stack/ros.svg",
};

export function get_stack_icon(tech: string): string {
	const iconPath = iconMapping[tech];

	if (!iconPath) {
		throw new Error(`Icono no encontrado: ${tech}`);
	}

	const icon = icons[iconPath];

	if (typeof icon !== "string") {
		throw new Error(`Asset no encontrado: ${tech}`);
	}

	return icon;
}
