import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/lib/getMDXComponents";

interface BlogContentProps {
  content: string;
}

export async function BlogContent({ content }: BlogContentProps) {
  const components = getMDXComponents();

  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
