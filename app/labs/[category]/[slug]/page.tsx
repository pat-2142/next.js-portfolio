// app/labs/[category]/[slug]/page.tsx  (or similar dynamic route)
//
// This is a React Server Component (RSC) — the `async` keyword and the direct
// filesystem calls in getPostBySlug confirm there is no client-side JS bundle
// produced for this file. It runs exclusively on the server at request time.
//
// Dynamic route segments:
//   [category] → e.g. "wazuh-labs"
//   [slug]     → e.g. "getting-started"
// Together they resolve to a URL like /labs/wazuh-labs/getting-started

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ParamProps } from "@/lib/types";
import { getPostBySlug } from "@/lib/utils";
import { SectionWrapper } from "@/app/components/layout";
import { PrimaryButton } from "@/app/components/ui";

export default async function LabActivity({ params }: ParamProps) {
  // `params` is a Promise in Next.js 15+ because route params are now async.
  // Awaiting it gives us the plain { category, slug } object we need.
  const { category, slug } = await params;

  // Look up the MDX file that matches this category + slug combination.
  // Returns null if no matching file exists on disk.
  const post = getPostBySlug(
    category,
    slug
  );

  // If getPostBySlug returned null (file not found), hand off to Next.js's
  // built-in 404 handler. `notFound()` throws internally, so nothing after
  // this block executes when the post is missing.
  if (!post) {
    notFound();
  }

  return (
    // SectionWrapper provides consistent page padding and renders the
    // frontmatter `title` field as the visible page heading.
    <SectionWrapper heading={post.frontmatter.title}>
        <div className="flex flex-1 flex-col">

            {/* Frontmatter fields are plain strings extracted by gray-matter —
                no MDX rendering needed for these short metadata values. */}
            <p>{post.frontmatter.description}</p>

            {/* MDXRemote (RSC edition) compiles and renders the MDX body on the
                server. `source` receives the raw MDX string from the parsed file.
                Because this is the /rsc import, no client bundle is shipped —
                the output is plain HTML sent to the browser.
                You can pass a `components` prop here to swap MDX elements for
                your own React components (e.g. custom code blocks, callouts). */}
            <MDXRemote source={post.content} />

            <div className="flex gap-2 pt-4">
                {/* Navigate back to the labs listing page after reading a post. */}
                <PrimaryButton href={'/labs'} label="BACK TO LABS" />
            </div>
        </div>
    </SectionWrapper>
  );
}