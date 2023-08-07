export default function FacilitySpecialtyCard({ specialty }) {
  return (
    <div className="pb-4 border-b border-stone-300 justify-start items-end gap-4 inline-flex">
      <div className="grow shrink basis-0 text-zinc-900 text-2xl font-medium underline">
        {specialty.name}
      </div>
      <div className="text-center text-green-700 text-2xl font-light">+</div>
    </div>
  );
}
