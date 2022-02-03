const path = require('path');
const mix = require('laravel-mix');

const arJsPage = [
    './_includes/assets/js/inline.js',
];

const arCssPage = [
    './_includes/assets/css/main.css',
];

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
});

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, 'dist/js');
});

arCssPage.forEach(sCssPage => {
    mix.postCss(sCssPage, 'dist/css/style.css')
});

mix.disableNotifications();