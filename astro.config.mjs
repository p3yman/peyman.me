import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { remarkAlert } from "remark-github-blockquote-alert";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://peyman.me",
  integrations: [robotsTxt(), sitemap()],
  outDir: "./dist",
  markdown: {
    remarkPlugins: [remarkAlert],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
