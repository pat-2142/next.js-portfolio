// app/labs/[category]/page.tsx
//
// Lists every lab activity belonging to a single series, e.g. /labs/wazuh-labs
// lists all lab activities under the "wazuh-labs" category.
//
// Dynamic route segment:
//   [category] → e.g. "wazuh-labs"
// This sits alongside app/labs/[category]/[slug]/page.tsx — Next.js treats
// the presence/absence of the extra [slug] segment as the differentiator,
// so both routes coexist without conflict.

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SectionWrapper } from "@/app/components/layout";
import { ObjectCard, PrimaryButton } from "@/app/components/ui";
import { getPostsByCategory, buildPageTitle } from "@/lib/utils";

// A leaner variant of ParamProps — this route only has a [category] segment,
// no [slug], so we don't reuse the two-segment ParamProps type from lib/types.
type CategoryParamProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: CategoryParamProps): Promise<Metadata> {
  const { category } = await params;
  return {
    title: buildPageTitle(category),
    description: `Hands-on lab activities in the ${category} series.`,
  };
}

export default async function LabSeriesPage({ params }: CategoryParamProps) {
  const { category } = await params;

  // Returns all MDX posts under this category, or an empty array if the
  // category directory doesn't exist / has no posts.
  const posts = getPostsByCategory(category);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <SectionWrapper heading="Building a Production-Grade SOC: A Wazuh Lab Series">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.slug} className="flex lg:max-w-93">
            <ObjectCard>
              <h3 className="font-bold text-center">{post.frontmatter.title}</h3>
              <p>{post.frontmatter.description}</p>
              <div className="flex gap-2 flex-wrap justify-center">
                <PrimaryButton
                  label="VIEW ACTIVITY"
                  href={`/labs/${post.category}/${post.slug}`}
                />
              </div>
            </ObjectCard>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}