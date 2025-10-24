## Fustun Website

A modern, clean landing page for the Fustun Chrome extension in a white + biscuit theme, built with React and Vite.

- Live preview locally with Vite
- Responsive design with subtle shadows and rounded cards
- Sections: Hero, Features, How it works, Call to action, Footer
- Uses the Fustun repo icon and links to the extension GitHub

### How to run

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

### Build for production

```bash
npm run build
npm run preview
```

### Content sources

This site pulls details from the Chrome extension repo:

- Repo: https://github.com/praneeth4040/Fustun-AiStudyingBuddie
- Icon: icons/icon.svg (referenced directly via raw GitHub URL)

When you publish to the Chrome Web Store, update the “Add to Chrome” button to your store URL.

### Theming

Colors and components are defined in `src/index.css` and `src/App.css`. The primary biscuit accent is `#eed9c4`, and typography uses Inter.

### License

MIT
