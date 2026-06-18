# AbyssVape

A polished, responsive landing page for **AbyssVape — BedWars' best config**.

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload every file and folder from this directory to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

Your site will be available at:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

The empty whitelist endpoint will be:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/whitelist.json
```

If the repository itself is named `YOUR-USERNAME.github.io`, the URLs become:

```text
https://YOUR-USERNAME.github.io/
https://YOUR-USERNAME.github.io/whitelist.json
```

## Whitelist format

`whitelist.json` starts with an empty AbyssVape-compatible structure:

```json
{
  "PremiumUsers": {},
  "WhitelistedUsers": {},
  "BlacklistedUsers": {},
  "KillVape": false
}
```

Open `whitelist-tool.html` in your deployed site to generate entries:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/whitelist-tool.html
```

The tool accepts numeric Roblox user IDs and adds them to the `PremiumUsers`
object with the displayed tag `Abyss Plus`.

After editing the whitelist, commit the updated `whitelist.json` to GitHub.
GitHub Pages may take a minute to publish the new version.

### Point AbyssVape at the endpoint

Create this file in your Vape workspace:

```text
vape/whitelist-url.txt
```

The included workspace is already configured with:

```text
https://amrho94.github.io/whitelist.json
```

The `Universal.lua` workspace patch checks `PremiumUsers` by Roblox user ID
through `shared.vapewhitelist:isplus(player)`. For the local player, use
`shared.vapewhitelist.localplus`. The existing hashed owner/private privilege
system remains separate.

## Add your config download

Place your config file in the repository, then change the download button in `index.html`:

```html
<a class="button button-primary" href="your-config-file.zip" download>
```

## Files

- `index.html` — main page
- `styles.css` — design, responsive layout, and animations
- `script.js` — interactions and reveal effects
- `whitelist.json` — empty whitelist endpoint
- `whitelist-tool.html` — local whitelist-entry generator
- `404.html` — custom not-found page
- `.nojekyll` — tells GitHub Pages to serve files directly
