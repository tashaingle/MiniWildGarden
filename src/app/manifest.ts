import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mini Wild Garden",
    short_name: "Mini Wild Garden",
    description: "Practical field guides for helping wildlife in gardens and small outdoor spaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e5",
    theme_color: "#082419",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
