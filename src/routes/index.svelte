<script lang="ts">
	import { goto } from '$app/navigation';
	import Results from "./search.svelte";

	let query: string;

	const onSubmit = (_: any) => {
		if (query == null || query == "") {
			alert("Cannot process empty query");
			return;
		}
		goto(`/search?q=${query}`);
	}
</script>


<main>
	<h1>Unisearch</h1>
	<form on:submit|preventDefault={onSubmit}>
		<input bind:value={query} type="text" placeholder="Search...">
		<button type="submit">Search</button>
	</form>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>