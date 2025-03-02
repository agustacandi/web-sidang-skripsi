<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Dynalight&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}