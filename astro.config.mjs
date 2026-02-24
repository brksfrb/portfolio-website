import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brksfrb.com',
  integrations: [sitemap()],
});