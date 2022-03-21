const path = require('path');
const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

require('laravel-mix-bundle-analyzer');

// mix.alias({
//     '@': path.join(__dirname, '/src')
// });

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ],
    },
    plugins: [
        new Dotenv()
    ]
});

mix.extract([
    'swiper',
    'alpinejs',
]);

const arJsPage = [
    './src/js/app.js',
    './src/js/admin/index.js'
];

const arCssPage = [
    './src/css/style.css',
];

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, '_site/assets/js');
});

arCssPage.forEach(sCssPage => {
    mix.postCss(sCssPage, '_site/assets/css')
});

mix.disableNotifications();

if (!mix.inProduction()) {
    mix.bundleAnalyzer();
}
