<script lang="ts">
	let { title = $bindable() }: { title: string } = $props();
</script>

<div class="header-content">
	<div class="header-layout">
		<img src="chat.svg" class="icon" alt="chat icon" />
		<h1
			contenteditable="plaintext-only"
			spellcheck="false"
			bind:innerText={title}
		></h1>
	</div>
</div>

<style>
	.header-layout {
		display: -webkit-flex;
		display: flex;
		-webkit-justify-content: flex-start;
		justify-content: flex-start;
		-webkit-align-items: center;
		align-items: center;
		gap: 8px;
	}
	.header-content {
		background: #323232;
		color: #fff;
		font-size: 2rem;
		padding: 0.5rem 0.5em;
	}
	.icon {
		width: 1.6em;
	}
</style>
