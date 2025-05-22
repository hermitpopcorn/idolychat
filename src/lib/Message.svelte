<script lang="ts">
	import { getCharacterIconPath } from "$lib";

	let {
		data = $bindable(),
		onIconClick,
	}: { data: App.Message; onIconClick: () => void } = $props();

	const updateText = (e: FocusEvent) => {
		if (e.target == null) {
			return;
		}

		const element = e.target as HTMLLIElement;
		data.text = element.innerText;
		return;
	};
</script>

<li class="position-{data.position}">
	<button class="character-icon" onclick={() => onIconClick()}
		><img src={getCharacterIconPath(data.icon)} alt="character icon" /></button
	>
	<article
		class="text-box position-{data.position}"
		contenteditable="plaintext-only"
		spellcheck="false"
		onblur={(e) => updateText(e)}
	>
		{data.text}
	</article>
</li>

<style>
	li {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		gap: 0.5em;
		margin-bottom: 2em;
	}
	li.position-1 {
		flex-direction: row-reverse;
	}

	.character-icon {
		background: none;
		border: none;
		padding: 0;
		width: 4em;
		height: auto;
		aspect-ratio: 1/1;
		overflow: clip;
		cursor: pointer;
	}
	.character-icon img {
		width: 100%;
		height: 100%;
	}

	.text-box {
		background: #fdfdfd;
		padding: 1em 1.5em;
	}
	.text-box.position-0 {
		-webkit-border-radius: 2em 2em 2em 0;
		-moz-border-radius: 2em 2em 2em 0;
		border-radius: 2em 2em 2em 0;
	}
	.text-box.position-1 {
		background: #2cfb6d;
		-webkit-border-radius: 2em 2em 0 2em;
		-moz-border-radius: 2em 2em 0 2em;
		border-radius: 2em 2em 0 2em;
	}
</style>
