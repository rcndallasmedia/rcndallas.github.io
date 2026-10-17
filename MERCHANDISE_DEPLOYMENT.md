# 2nine merchandise storefront

The store is served at https://rcndallas.com/2ninestore/merchandise/.
The former `/spiritual-capital-merchandise/` directory has been removed.

Build the storefront source with:

```sh
NEXT_PUBLIC_BASE_PATH=/2ninestore/merchandise npm run build
```

Replace only `2ninestore/merchandise/` with the contents of `out/`.
Keep the church homepage, CNAME, root images, registration page, and `.nojekyll` intact.
GitHub Pages publishes the existing `main` branch from `/`.

The 2nine storefront includes animated light, a flowing text loop, detailed floating garments,
product selection, and a browser-local bag. Prices and live ordering are not yet connected.
