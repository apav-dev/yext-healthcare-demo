import Button from "../facility/Button";
import BasicContentCard from "../facility/BasicContentCard";

export default function InfoGridBanner({
  btnText,
  btnLink,
  title,
  content,
  contentMax,
}) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div className="w-[88px] h-3 bg-green-700" />
        <h3 className="text-text-500 text-zinc-900">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-x-24">
        {content &&
          content
            ?.slice(0, contentMax)
            .map((item) => <BasicContentCard key={item.id} content={item} />)}
      </div>
      <Button color="primary" href={btnLink}>
        <span>{btnText}</span>
      </Button>
    </div>
  );
}
