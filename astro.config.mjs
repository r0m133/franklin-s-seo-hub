import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://r0m133.github.io',
  base: '/site-zip-deploy',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll use our own index.css
    }),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
