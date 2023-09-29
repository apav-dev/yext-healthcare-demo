import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="mx-auto py-8 prose lg:prose-xl">
      <div className="w-[20%] h-3 bg-green-700 mb-6" />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
