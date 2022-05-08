<script lang="ts">
    import type { GH_Results } from '$lib/github';
    import type { GD_Results } from '$lib/gdrive'; 

    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let query =  $page.url.searchParams.get('q');

    export let ghResults: GH_Results[];
    export let gdResults: GD_Results[];

    const onSubmit = (_: any) => {
        if (query == null || query == "") {
            alert("Cannot process empty query");
            return;
        }
        goto(`/search?q=${query}`);
    }
</script>

<main>
    <form on:submit|preventDefault={onSubmit}>
        <input bind:value={query} type="text" placeholder="Search...">
        <button type="submit">Search</button>
    </form>

    <br />

    {#if ghResults.length === 0 && gdResults.length === 0}
        <p>No results found</p>
    {/if}

    {#if ghResults.length > 0}
        {#each ghResults as result}
            <div class="card">
                <div class="container">
                    <h4>
                        GitHub:
                        <a href={result.url}>{result.title}</a>
                        {
                            #if result.repository != null &&
                            result.repositoryUrl != null
                        }
                            in <a href={result.repositoryUrl}>
                                {result.repository}
                            </a>
                        {/if}
                    </h4>
                    <!-- <p>{result.body}</p> -->
                </div>
            </div>
        {/each}
    {/if}

    {#if gdResults.length > 0}
        {#each gdResults as result}
            <div class="card">
                <div class="container">
                    <h4>
                        Google Doc:
                        <a href={result.url}>{result.name}</a>
                    </h4>
                    {#if result.description != null}
                        <p>{result.description}</p>
                    {/if}
                </div>
            </div>
        {/each}
    {/if}
</main>