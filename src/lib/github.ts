import { Octokit } from "@octokit/rest";

export type GH_Results = {
    url: string,
    title: string,
    body: string | null,
    repository: string | null,
    repositoryUrl: string | null,
    state: string,
}

const GITHUB_ACCESS_TOKEN = '';

export async function getFromGitHub(query: string): Promise<GH_Results[]> {
    // Documentation: https://docs.github.com/en/rest/issues/issues
    const octokit = new Octokit({
        auth: GITHUB_ACCESS_TOKEN,
    });

    const response = await octokit.request('GET /issues', {
        filter: 'all',
        state: 'all',
        accept: 'application/vnd.github.VERSION.text+html',
    });

    if (response.status !== 200) {
        return [];
    }
    const filtered = response.data.filter((issue) => {
        return (
            issue.title.toLowerCase().includes(query.toLowerCase())
            // || issue.body?.toLowerCase().includes(query.toLowerCase())
        );
    })

    return filtered.map((issue) => {
        return {
            url: issue.html_url,
            title: issue.title,
            body: issue.body ?? null,
            repository: issue.repository?.full_name ?? null,
            repositoryUrl: issue.repository?.url ?? null,
            state: issue.state,
        }
    })
}