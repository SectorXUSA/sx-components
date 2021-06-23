<svelte:options tag="sx-markdown" />

<script>
// @ts-nocheck

	import { onMount } from 'svelte';

	let Marked;

	let template;

	onMount(async () => {
		Marked = (await import('https://unpkg.com/marked@2.1.2/lib/marked.esm.js')).default;
	});
</script>

<template bind:this={template}>
	<pre>
		<slot />
	</pre>
</template>

{#if Marked}
	{@html Marked(template.content.textContent)}
{/if}
