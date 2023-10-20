export default function Testimonial() {
  return (
    <div className="p-20 flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch h-[409px] px-40 py-10 bg-zinc-100 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-[329px] justify-start items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[88px] h-3 bg-primary-green" />
            <div className="self-stretch text-zinc-900 text-2xl font-bold leading-[33.99px]">
              "My orthopedic treatment was successful and I'm feeling great!
              Highly recommend this doctor."
            </div>
            <div className="pb-2 border-b border-primary-green justify-start items-start gap-3 inline-flex">
              <a className="text-zinc-900 text-base font-bold leading-normal cursor-pointer hover:text-neutral-500">
                Read Juliana’s Story
              </a>
            </div>
          </div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://a.mktgcdn.com/p/lO44RM1IVXCDuJz6jetQhsdVpUgNzajscAiWXAGCrsA/4096x2550.jpg"
          />
        </div>
      </div>
      <div className="self-stretch px-[120px] justify-start items-start gap-4 inline-flex">
        <div className="grow shrink basis-0 h-1 bg-stone-300" />
        <div className="grow shrink basis-0 h-1 bg-zinc-900" />
        <div className="grow shrink basis-0 h-1 bg-stone-300" />
        <div className="grow shrink basis-0 h-1 bg-stone-300" />
        <div className="grow shrink basis-0 h-1 bg-stone-300" />
      </div>
    </div>
  );
}
