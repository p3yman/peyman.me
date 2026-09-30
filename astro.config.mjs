import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  site: "https://peyman.me",
  integrations: [sitemap()],
  outDir: "./dist",
  compressHTML: true,
  markdown: {
    processor: unified({ remarkPlugins: [remarkAlert] }),
  },
});
