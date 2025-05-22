// src/app.d.ts
/// <reference types="svelte" />

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Message {
			id: number;
			text: string;
			icon?: number;
			position: number;
		}
	}
}

export {};
