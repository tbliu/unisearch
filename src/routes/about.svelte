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
	<h1>About Unisearch</h1>

	<p>
		<b>This is a work in progress!</b> Currently only GitHub and Google Docs
		are supported.
	</p>

	<p>
		Our workflow is fragmented across different tools, like Google Docs,
		GitHub, Slack, and Jira. If you want to find some piece of information,
		you have to remember where it lives first.
	</p>

	<p>
		Unisearch aims to rectify this by bringing a single, unified search over
		a variety of data sources which streamlines your ability to find and
		share knowledge.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
