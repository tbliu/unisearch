<script lang="ts">
    import { page } from '$app/stores';
    const query =  $page.url.searchParams.get('q');
</script>

<main>
    <h1>Results</h1>
    <p>Query: {query}</p>
</main>