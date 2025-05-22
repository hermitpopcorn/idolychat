<script lang="ts">
	let { display }: { display: boolean } = $props();
</script>

<div class="overlay {display ? 'display' : 'hide'}">
	<article class="text">
		<h1>Loading</h1>
	</article>
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

	.text {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 200;
		overflow: auto;
		color: #fff;
	}
</style>
