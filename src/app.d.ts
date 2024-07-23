// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			status?: string;
		}
		// interface Locals {}
		interface PageData {
			title: string;
			description: string;
		}
		// interface PageState {}
		// interface Platform {}
		namespace Superforms {
			type Message = {
				type: "error" | "success";
				text: string;
			};
		}
	}
}

export {};
