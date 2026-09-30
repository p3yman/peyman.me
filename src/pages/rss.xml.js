import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Peyman Eskandari’s Blog",
    description:
      "A front-end <developer /> focused on building products that are beautiful from the inside out.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.category,
      link: `/blog/${post.id.split("/").pop()}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
