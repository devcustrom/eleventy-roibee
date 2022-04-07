const path = require('path');
const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

require('laravel-mix-bundle-analyzer');

mix.alias({
    '@': path.join(__dirname, '/src')
});
mix.babelConfig({
	plugins: ['@babel/plugin-syntax-dynamic-import'],
});

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
mix.setPublicPath('_site/');
// mix.setPublicPath('/_site/assets');
mix.extract([
    'swiper',
    'alpinejs',
]);

const arJsPage = [
    'src/js/app.js',
    'src/js/admin/index.js'
];

const arCssPage = [
    'src/css/style.css',
];

arJsPage.forEach(sJsPage => mix.js(sJsPage, 'assets/js'));

arCssPage.forEach(sCssPage => mix.postCss(sCssPage, 'assets/css'));

mix.disableNotifications();

if (!mix.inProduction()) {
    mix.bundleAnalyzer();
}
