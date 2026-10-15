# Spiritual Capital merchandise storefront

The merchandise storefront is served at https://rcndallas.com/spiritual-capital-merchandise/.

This directory is the static output of the RCN Dallas Apparel Next.js project, built with:

```sh
NEXT_PUBLIC_BASE_PATH=/spiritual-capital-merchandise npm run build
```

To update, rebuild the storefront source and replace only `spiritual-capital-merchandise/` with the contents of its `out/` directory. Keep root `index.html`, `style.css`, `CNAME`, church images, and conference registration pages intact. The root `.nojekyll` marker allows Next.js `_next/` assets to be served by GitHub Pages. Publishing remains the existing GitHub Pages branch source (`main`, `/`).

The storefront supports product selection, a browser-local bag, and a rotatable 3D garment viewer with GLB exports. Prices and checkout are previews; payment and order processing are not connected.
