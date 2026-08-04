import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SectionWrapper } from "@/app/components/layout";
import { ObjectCard, PrimaryButton } from "@/app/components/ui";
import { getPostsByCategory, buildPageTitle } from "@/lib/utils";
import { getCategoryInfo } from "@/lib/categories";

type CategoryParamProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: CategoryParamProps): Promise<Metadata> {
  const { category } = await params;
  const { title, description } = getCategoryInfo(category);

  return {
    title: buildPageTitle(title),
    description,
  };
}

export default async function LabSeriesPage({ params }: CategoryParamProps) {
  const { category } = await params;
  const { title } = getCategoryInfo(category);

  const posts = getPostsByCategory(category);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <SectionWrapper heading={title}>
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