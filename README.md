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

`whitelist.json` currently contains an empty JSON array:

```json
[]
```

You can later add usernames or IDs:

```json
[
  "ExampleUser",
  "123456789"
]
```

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
- `404.html` — custom not-found page
- `.nojekyll` — tells GitHub Pages to serve files directly
