export default function BasicContentCard({ content }) {
  return (
    <a
      href={`/${content?.slug}` || "#"}
      className="pb-4 border-b border-stone-300 justify-start items-end gap-4 inline-flex text-zinc-900 text-2xl font-medium hover:cursor-pointer hover:text-neutral-500"
    >
      <div className="grow shrink basis-0 underline">{content.name}</div>
      <div className="text-center text-green-700 text-2xl font-light">+</div>
    </a>
  );
}
