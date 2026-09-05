# Four years of us ♡

A turquoise-and-green anniversary scrapbook, made with plain HTML, CSS, and JavaScript. No build step or dependencies required.

## Make it yours

Edit **content.js** to change the love note, signature, photo captions, and memory titles. The initial letter is sample copy: replace it with your own words before sharing.

Put your photographs in **assets/photos/**, then set each photo's `src`, for example `"assets/photos/beach.jpg"`. Add a descriptive `alt` for each photo. Set `heroPhoto.src` for the large opening photo and the `memories` entries for the four smaller pictures. You can add more memory entries. Empty or missing images retain their designed placeholders. Photos are cropped to fit; adjust `object-position` in CSS if a face needs repositioning.

To change the main headline or other page text, edit **index.html**. Colors and layout are in **styles.css**. Fonts load from Google Fonts, with local fallback fonts when offline.

The first two memory photographs are included as optimized JPEGs. Their displayed dates come from the originals' EXIF `DateTimeOriginal` and `OffsetTimeOriginal`: September 30, 2022 at 21:15:22.380 (UTC−05:00), and March 4, 2023 at 18:39:09.435 (UTC−06:00). The filenames reflect the following day in UTC; the site uses the local capture date. Original HEIC files are unchanged, and the web copies do not retain EXIF metadata. Each memory can have `date` (YYYY-MM-DD), `dateLabel` (display text), and an optional `position` to adjust its crop.

The third and fourth cards contain the dinner photo dated **September 7, 2024** (confirmed by you; the JPG has no EXIF capture timestamp) and the outdoor portrait dated **September 20, 2025** (EXIF capture time 18:42:22.521, UTC−06:00). Both are optimized JPEG copies without EXIF metadata; the source files are unchanged.

## Preview locally

Open **index.html** directly in a browser, or run `node preview.cjs` and visit http://localhost:4173. Stop the preview with Ctrl+C.

## Publish on GitHub Pages

1. Push these files to the `main` branch of `CoalMiner122113/Laule`.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Deploy anniversary site to GitHub Pages → Run workflow** (or push another commit).
4. After the deployment succeeds, visit https://coalminer122113.github.io/Laule/.

The included workflow stages only website files and follows the [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). Future pushes to `main` redeploy automatically. The live site is public, so choose photos and words you’re comfortable sharing publicly.

## Files

- `index.html`: page structure and main copy
- `content.js`: your note and photographs
- `styles.css`: responsive scrapbook design
- `script.js`: photo rendering and accessible letter open/close behavior
- `.github/workflows/pages.yml`: deployment
- `preview.cjs`: local preview server (not published)
