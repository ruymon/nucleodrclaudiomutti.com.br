import { MetadataRoute } from "next";
// TODO: Use env for domain.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nucleodrclaudiomutti-com-br.vercel.app",
      lastModified: new Date(),
    },
  ]
}