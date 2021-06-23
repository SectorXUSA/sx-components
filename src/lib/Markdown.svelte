<svelte:options tag="sx-markdown" />

<script>
// @ts-nocheck

	import { onMount } from 'svelte';

	export let src;

	let Marked;

	onMount(async () => {
		Marked = (await import('https://unpkg.com/marked@2.1.2/lib/marked.esm.js')).default;
	});
</script>

{#if Marked}
	{@html Marked(src)}
{/if}
