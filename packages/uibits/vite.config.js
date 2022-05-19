import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve as pathResolve} from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': pathResolve(__dirname, './src')
        }
    }
});