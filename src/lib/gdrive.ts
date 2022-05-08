import {google} from 'googleapis';

export type GD_Results = {
    url: string,
    name: string | null,
    description: string | null,
}

const GDRIVE_OAUTH_CLIENT_ID = '';
const GDRIVE_OAUTH_CLIENT_SECRET = '';
const GDRIVE_OAUTH_REDIRECT_URI = 'http://localhost:3002/gdriveCallback';
const GDRIVE_API_SCOPES = [
    'https://www.googleapis.com/auth/drive.readonly',
]

// This was retrieved through OAuth redirect URI. Need to get this programatically
const GDRIVE_CODE = '';
const GDRIVE_ACCESS_TOKEN = '';

export async function getFromGDocs(query: string): Promise<GD_Results[]> {
    // Documentation:
    // https://developers.google.com/drive/api/v3/reference/files/list

    // Only support google docs for now...e.g.: filter out presentations
    // spreadsheets, folders, etc. by mimetype
    // const q = "mimeType = 'application/vnd.google-apps.folder' and "+
    //     `fullText contains ${query}`
    const q = "mimeType = 'application/vnd.google-apps.document' and "+
    `fullText contains "${query}"`

    const oauth2Client = new google.auth.OAuth2(
        GDRIVE_OAUTH_CLIENT_ID,
        GDRIVE_OAUTH_CLIENT_SECRET,
        GDRIVE_OAUTH_REDIRECT_URI
    );
    // const url = oauth2Client.generateAuthUrl({
    //     access_type: 'offline',
    //     scope: GDRIVE_API_SCOPES,
    // });

    // const {tokens} = await oauth2Client.getToken(GDRIVE_CODE);
    oauth2Client.setCredentials({
        access_token: GDRIVE_ACCESS_TOKEN,
        scope: 'https://www.googleapis.com/auth/drive.readonly',
        token_type: 'Bearer',
        refresh_token: '',
    });

    const drive = google.drive({version: 'v3', auth: oauth2Client});
    const results = await drive.files.list({
        q,
        supportsAllDrives: true,
    })

    return (results.data?.files ?? []).map((file) => {
        return {
            url: `https://docs.google.com/document/d/${file.id}/edit`,
            name: file.name ?? null,
            description: file.description ?? null,
        }
    })
}