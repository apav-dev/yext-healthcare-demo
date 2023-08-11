import { Markdown } from "@yext/react-components";
import "../../../src/index.css";
import "../../styles/markdown.css";
import BodyText from "../atoms/BodyText";

export default function BlogContent({ content }) {
  return (
    <div className="w-full whitespace-pre-wrap px-16 py-16 m-4">
      <div className="w-[88px] h-3 bg-green-700 mb-6" />
      <BodyText text={content} />
    </div>
  );
}
