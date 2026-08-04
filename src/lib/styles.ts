/**
 * Elevación al pasar el mouse, compartida por las tarjetas clickeables
 * (tarjetas de eventos/proyectos y el destacado de evento del inicio).
 * Se anima `translate` (no `transform`): en Tailwind v4 `translate-y-*` usa la propiedad nativa.
 */
export const CARD_LIFT_CLASS =
	"transition-[translate,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kokoa-lime1 motion-reduce:transition-none";
