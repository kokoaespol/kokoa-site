import type { Action } from "svelte/action";

type RevealOptions = {
	/** Retraso antes de animar, en ms — usado para escalonar listas. */
	delay?: number;
};

/** Estado inicial oculto. Única fuente de verdad: el action remueve exactamente estas clases. */
const HIDDEN = "translate-y-4 opacity-0";

/**
 * Clases que debe llevar todo elemento con `use:reveal`.
 * Se anima `translate` (no `transform`): en Tailwind v4 `translate-y-*` usa la propiedad nativa.
 */
export const REVEAL_CLASS = `${HIDDEN} transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none`;

const HIDDEN_CLASSES = HIDDEN.split(" ");

/**
 * Revela el elemento (fade + slide-up) la primera vez que entra en el viewport.
 * Respeta prefers-reduced-motion mostrando el elemento sin animar.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	const prefers_reduced_motion =
		typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (prefers_reduced_motion) {
		node.classList.remove(...HIDDEN_CLASSES);
		return {};
	}

	node.style.transitionDelay = `${options.delay ?? 0}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				node.classList.remove(...HIDDEN_CLASSES);
				observer.disconnect();
			}
		},
		{ threshold: 0.15 },
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		},
	};
};
