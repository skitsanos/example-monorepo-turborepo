const path = require('path');
const {fileURLToPath} = require('url');
const {defineConfig} = require('vite');
const {resolve: pathResolve} = require('path');

const current = fileURLToPath(import.meta.url);
const root = path.dirname(current);

module.exports = defineConfig({
    resolve: {
        alias: {
            '@': pathResolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: path.resolve(root, 'src/index.js'),
            name: '@skitsanos/uibits',
            fileName: format => `uibits.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    }
});