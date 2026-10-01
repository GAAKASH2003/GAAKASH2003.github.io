import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const treatJavaScriptAsJsx = () => ({
    name: 'treat-javascript-as-jsx',
    enforce: 'pre',
    async transform(code, id) {
        if (id.includes('/src/') && id.endsWith('.js')) {
            return transformWithOxc(code, id, { lang: 'jsx' });
        }
    },
});

export default defineConfig({
    plugins: [treatJavaScriptAsJsx(), react(), tailwindcss()],
    optimizeDeps: {
        noDiscovery: true,
        include: [
            '@material-ui/core',
            '@material-ui/icons',
            'hoist-non-react-statics',
            'react',
            'react-dom',
            'react-helmet',
            'react-icons',
            'react-is',
            'react-reveal',
            'react-reveal/Fade',
            'react-router-dom',
            'react-router-hash-link',
            'react-slick',
            'slick-carousel',
            'prop-types',
            'validator',
            'validator/lib/isEmail',
        ],
        // Material UI v4 consumes these CommonJS modules as default/named ESM imports.
        needsInterop: [
            'hoist-non-react-statics',
            'prop-types',
            'react-is',
            'react-reveal/Fade',
            'validator/lib/isEmail',
        ],
    },
});
