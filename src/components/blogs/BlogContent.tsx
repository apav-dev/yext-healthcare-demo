import { Markdown } from "@yext/react-components";
import "../../../src/index.css";
import "../../styles/markdown.css";

export default function BlogContent({ content }) {
  return (
    <div className="w-full whitespace-pre-wrap px-12 py-12 m-4">
      <div className="w-[88px] h-3 bg-green-700 mb-6 prose" />
      <Markdown content={content} />
    </div>
  );
}
