<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>About UNISEARCH</h1>

	<p>
		Our workflow is so fragmented across different tools. From Google Docs to
		GitHub PRs and Issues, Asana, Slack, JIRA, to name a few.
	</p>

	<p>
		UNISEARCH aims to bring one central tool to search across a variety of
		different tools, so you don't have to remember where your docs live.
		"One search to rule them all".
	</p>

	<p>
		<b>This is a work in progress!</b> Currently only GitHub and Google Docs
		are supported.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
