import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://sonrisaperfecta.cr',
  build: {
    assets: '_assets'
  }
});
