<script lang="ts">
	import "../styles/global.scss";
	import {
		CharacterIcons,
		Header,
		MessageDisplay,
		ParallaxBackground,
		Position,
		MessageOptions,
		type DisplayMessageOptions,
	} from "$lib";
	import { onMount } from "svelte";
	import LoadingOverlay from "$lib/LoadingOverlay.svelte";

	let blockLoading = $state(true);

	let title = $state("Chat");

	let messages: App.Message[] = $state([]);

	onMount(() => {
		const t = window.localStorage.getItem("header-title");
		if (t != null) {
			title = t;
		}

		const m = JSON.parse(window.localStorage.getItem("messages") ?? "null");
		if (m) {
			messages = m;
		} else {
			messages = [
				{ id: 0, text: "Hello!", position: Position.Right },
				{
					id: 1,
					text: "Hi!",
					icon: CharacterIcons.Kokoro,
					position: Position.Left,
				},
			];
		}

		blockLoading = false;
	});

	const pushMessage = () => {
		messages.push({
			id: (messages.at(-1)?.id ?? -1) + 1,
			text: "",
			position: Position.Right,
		});
	};

	let displayMessageOptions: DisplayMessageOptions = $state({
		display: false,
		remove: false,
	});
	let displayMessageOptionsLink: number | undefined = $state(undefined);

	const openDisplayMessageOptions = (index: number) => {
		displayMessageOptions.display = true;
		displayMessageOptions.characterIcon = messages[index].icon;
		displayMessageOptions.position = messages[index].position;
		displayMessageOptionsLink = index;
	};

	$effect(() => {
		if (displayMessageOptionsLink == undefined) {
			return;
		}

		if (displayMessageOptions.position != undefined) {
			messages[displayMessageOptionsLink].position =
				displayMessageOptions.position;
		}

		if (displayMessageOptions.characterIcon != undefined) {
			messages[displayMessageOptionsLink].icon =
				displayMessageOptions.characterIcon;
		}
	});

	const removeMessage = () => {
		if (displayMessageOptionsLink == undefined) {
			return;
		}

		messages.splice(displayMessageOptionsLink, 1);
		displayMessageOptionsLink = undefined;
		displayMessageOptions.display = false;
	};

	$effect(() => {
		window.localStorage.setItem("messages", JSON.stringify(messages));
	});
	$effect(() => {
		window.localStorage.setItem("header-title", title);
	});
</script>

<main class="container">
	<ParallaxBackground />
	<div class="container-layout">
		<section class="section-header">
			<Header bind:title />
		</section>
		<section class="section-chat">
			{#each messages as message, index (message.id)}
				<MessageDisplay
					bind:data={messages[index]}
					onIconClick={() => openDisplayMessageOptions(index)}
				/>
			{/each}
		</section>
		<section class="section-controls">
			<button class="button-add" onclick={pushMessage}
				><img src="plus.svg" alt="plus icon" /> Add</button
			>
		</section>
	</div>
	<MessageOptions
		options={displayMessageOptions}
		onRemoveClick={removeMessage}
	/>
	<LoadingOverlay display={blockLoading} />
</main>

<style>
	.container {
		background: #4c4c4c;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		min-width: 420px;
	}
	.container-layout {
		width: 100%;
		height: 100%;
		position: relative;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-flex-wrap: nowrap;
		flex-wrap: nowrap;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-align-items: stretch;
		align-items: stretch;
	}
	.section-chat {
		flex-grow: 1;
		min-width: 0;
		overflow: scroll;
		padding: 1em;
	}
	.section-controls {
		background: #323232;
		color: #fff;
		padding: 1rem 1em;
	}
	.button-add {
		border: 0;
		background: 0;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		color: #fff;
		align-items: center;
		gap: 0.25em;
		font-size: 1.5em;
	}
	.button-add img {
		width: 1em;
		aspect-ratio: 1/1;
	}
</style>
