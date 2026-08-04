// lib/categories.ts
import { labSeriesList } from "@/lib/data";

// Looks up a series by its slug (the last segment of `link`), so pages that
// only have the URL param can still find title/description/tags.
export function getCategoryInfo(category: string) {
  const series = labSeriesList.find(
    (s) => s.link.split("/").pop() === category
  );

  return (
    series ?? {
      id: -1,
      title: category,
      description: `Hands-on lab activities in the ${category} series.`,
      link: `/labs/${category}`,
      tags: [],
    }
  );
}