import { getFromGitHub } from "$lib/github";

/** @type {import('./search').RequestHandler} */
export async function get({url}: { url: URL }) {
    const query = url.searchParams.get('q');
    if (query == null) {
        return [];
    }
    const ghResults = getFromGitHub(query);
    const results = await Promise.all([ghResults]);

    return {
        body: {
            results: results[0],
        },
    }
}