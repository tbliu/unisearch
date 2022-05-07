export function getGDocs(query: string) {
    // Documentation:
    // https://developers.google.com/drive/api/v3/reference/files/list

    const qParam = "mimeType != 'application/vnd.google-apps.folder' and "+
        `fullText contains ${query}`

    const url = encodeURI(
        `https://www.googleapis.com/drive/v3/files?q=${qParam}`
        + `supportsAllDrives=true`
        + `&key=${'GDRIVE_API_KEY'}`
    );
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'GDRIVE_OAUTH_TOKEN'}`,
        },
        supportsAllDrives: true,
    }
    fetch(url, options)
}