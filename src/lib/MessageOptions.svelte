<script lang="ts">
	import { CharacterIcons, getCharacterIconPath, Position } from "$lib";

	export interface DisplayMessageOptions {
		display: boolean;
		characterIcon?: number;
		position?: number;
	}

	let {
		options = $bindable(),
		onRemoveClick,
	}: { options: DisplayMessageOptions; onRemoveClick: () => void } = $props();

	const close = () => {
		options.display = false;
	};

	const characterIcons = Object.keys(CharacterIcons)
		.filter((key) => !isNaN(Number(key)))
		.map((i) => Number(i) as CharacterIcons);
</script>

<div class="overlay {options.display ? 'display' : 'hide'}">
	<section class="modal">
		<section class="form">
			<section class="form-subsection">
				<h2>Icon</h2>
				<section class="icon-selector">
					{#each characterIcons as icon}
						<button
							onclick={() => {
								options.characterIcon = icon;
							}}
							class={options.characterIcon == icon ? "selected" : ""}
						>
							<img
								src={getCharacterIconPath(icon)}
								alt="character icon select option"
							/>
						</button>
					{/each}
				</section>
			</section>
			<section class="form-subsection">
				<h2>Position</h2>
				<section class="position-selector">
					{#each [{ a: Position.Left, b: "Left (incoming)" }, { a: Position.Right, b: "Right (outgoing)" }] as option}
						<button
							onclick={() => {
								options.position = option.a;
							}}
							class={options.position == option.a ? "selected" : ""}
							>{option.b}</button
						>
					{/each}
				</section>
			</section>
			<button onclick={onRemoveClick} class="remove-button"
				>Remove message</button
			>
			<button onclick={close}>Close</button>
		</section>
	</section>
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}
	.overlay.display {
		display: block;
	}
	.overlay.hide {
		display: none;
	}

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: 20px;
		border: 1px solid #ccc;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		z-index: 101;
		max-width: 80%;
		max-height: 80%;
		overflow: auto;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.form-subsection {
		display: flex;
		flex-direction: column;
	}

	button {
		border: 2px solid #3b3b3b;
		background: none;
		padding: 1em;
		cursor: pointer;
		border-radius: 1em;
		margin-bottom: 0.5em;
	}
	button.selected {
		background: #ececec;
	}
	.remove-button {
		border: 2px solid #9e1f1f;
		color: #9e1f1f;
	}

	.icon-selector {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5em;
	}
	.icon-selector button {
		padding: 0.5em;
	}
	.icon-selector img {
		width: 3em;
		height: 3em;
		aspect-ratio: 1/1;
	}

	.position-selector {
		display: flex;
		gap: 0.5em;
		align-items: stretch;
		flex-wrap: nowrap;
	}
	.position-selector button {
		width: 100%;
	}
</style>
