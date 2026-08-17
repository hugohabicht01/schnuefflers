import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://schnuefflers.de',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
  image: {
    responsiveStyles: true,
  },
});
