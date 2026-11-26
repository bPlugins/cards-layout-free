# Cards Layout (free)

The free Cards Layout block plugin, as published on [WordPress.org](https://wordpress.org/plugins/cards-layout/).

This repository is generated from the main Cards Layout repository with `npm run export:free`.
Make changes there: anything edited here is replaced by the next export.

## Build

The block's source imports shared components from [bpl-tools](https://github.com/bPlugins/bpl-tools),
which must sit next to this folder (`../bpl-tools`).

    npm install
    npm run build        # build/
    npm run check:free   # fails if Pro or license code is present
    npm run zip          # dist/cards-layout.zip, ready for WordPress.org
