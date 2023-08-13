import { Markdown } from "@yext/react-components";
import BodyText from "../atoms/BodyText";

export default function BlogContent({ content }) {
  return (
    <div className="mx-auto py-8 prose prose-slate">
      <div className="w-[20%] h-3 bg-green-700 mb-6" />
      <Markdown content={content} />
    </div>
  );
}
