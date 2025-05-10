import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '/resources'),
            '@atoms': path.resolve(__dirname, '/resources/js/Components/Atoms'),
            '@molecules': path.resolve(__dirname, '/resources/js/Components/Molecules'),
            '@organisms': path.resolve(__dirname, '/resources/js/Components/Organisms'),
            '@templates': path.resolve(__dirname, '/resources/js/Components/Templates'),
            '@composables': path.resolve(__dirname, '/resources/js/composables'),
            '@store': path.resolve(__dirname, '/resources/js/store'),
            '@services': path.resolve(__dirname, '/resources/js/services'),
        },
    },
});
