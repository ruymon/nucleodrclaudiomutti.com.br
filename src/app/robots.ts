import { MetadataRoute } from "next";
 // TODO: Use env for sitemap url
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://nucleodrclaudiomutti-com-br.vercel.app/sitemap.xml",
  }
}