import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { remarkAlert } from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
  site: "https://peyman.me",
  integrations: [tailwind(), robotsTxt(), sitemap()],
  outDir: "../dist",
  markdown: {
    remarkPlugins: [remarkAlert],
  },
});
