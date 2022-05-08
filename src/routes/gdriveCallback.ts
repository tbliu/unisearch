export async function get({request}: { request: Request }) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    return {
        status: 200,
        body: {
            code,
        }
    }
}