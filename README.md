# [Work In Progress] Unisearch

**This project is still in early stages!**

Knowledge at many companies and orgs are fractured across products like Google
Docs, Asana, GitHub, Slack, etc. To find a particular piece of information, you
first have to remember *where* it lives before you can actually search for it.

Unisearch (**Uni**fied **Search**) is a tool that rectifies this by allowing you
to search across different tools from a single place. 

## Features (aspirational)
- Support for Asana, Slack, JIRA, Dropbox
- Regex search
- Filtering by data source
- Drilldown into search results

## Trying it out
This project is still in its early stages and so far only searches across
Google Docs and GitHub Issues.

If you'd like to try it out, clone this repo,
fetch a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and a
[Google Drive Access Token](https://developers.google.com/identity/protocols/oauth2)
and add it to [github.ts](https://github.com/tbliu/unisearch/blob/master/src/lib/github.ts) and [gdrive.ts](https://github.com/tbliu/unisearch/blob/master/src/lib/gdrive.ts) respectively.

Run `yarn run` and go to `localhost:3000`.

## Screenshots
To come