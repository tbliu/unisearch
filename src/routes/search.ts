import { getFromGitHub } from "$lib/github";
import { getFromGDocs } from "$lib/gdrive";

/** @type {import('./search').RequestHandler} */
export async function get({url}: { url: URL }) {
    const query = url.searchParams.get('q');
    if (query == null) {
        return [];
    }
    const ghResults = getFromGitHub(query);
    const gdResults = getFromGDocs(query);

    const results = await Promise.all([ghResults, gdResults]);

    return {
        body: {
            ghResults: results[0],
            gdResults: results[1],
        },
    }
}