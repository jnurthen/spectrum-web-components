const { postCSSPlugins } = require('../../../scripts/css-processing.js');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        ...postCSSPlugins(),
        purgecss({
            content: ['../_site/**/*.html'],
            whitelistPatterns: [
                /focus-visible/,
                /headerContainer/,
                /\.spectrum-Heading(1|2|3)/,
                /sp-link/,
                /sp-sidenav/,
                /code-example/,
            ],
        }),
    ],
};
