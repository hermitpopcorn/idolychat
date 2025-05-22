// place files you want to import through the `$lib` alias in this folder.

export { default as Header } from "./Header.svelte";
export { default as MessageDisplay } from "./Message.svelte";
export { default as ParallaxBackground } from "./ParallaxBackground.svelte";
export {
	default as MessageOptions,
	type DisplayMessageOptions,
} from "./MessageOptions.svelte";
export { default as LoadingOverlay } from "./LoadingOverlay.svelte";

export enum Position {
	Left,
	Right,
}

export enum CharacterIcons {
	Mei,
	Sakura,
	Yuu,
	Kokoro,
	Miho,
}

const characterIconMap: Record<CharacterIcons, string> = {
	[CharacterIcons.Mei]: "character-icons/mei.png",
	[CharacterIcons.Sakura]: "character-icons/sakura.png",
	[CharacterIcons.Yuu]: "character-icons/yuu.png",
	[CharacterIcons.Kokoro]: "character-icons/kokoro.png",
	[CharacterIcons.Miho]: "character-icons/miho.png",
};

export const getCharacterIconPath = (
	characterIcon: CharacterIcons | undefined,
): string => {
	if (characterIcon == undefined) {
		return "character-icons/default.png";
	}

	return characterIconMap[characterIcon];
};
