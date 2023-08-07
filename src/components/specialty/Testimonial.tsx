export default function Testimonial() {
  return (
    <div className="p-20 flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch h-[409px] px-40 py-10 bg-zinc-100 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-[329px] justify-start items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[88px] h-3 bg-green-700" />
            <div className="self-stretch text-zinc-900 text-2xl font-bold leading-[33.99px]">
              "My orthopedic treatment was successful and I'm feeling great!
              Highly recommend this doctor."
            </div>
            <div className="pb-2 border-b border-green-700 justify-start items-start gap-3 inline-flex">
              <a className="text-zinc-900 text-base font-bold leading-normal cursor-pointer hover:text-neutral-500">
                Read Juliana’s Story
              </a>
            </div>
          </div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/d3d8/27c9/6d89cc15171546d53a860da8cf72d71f?Expires=1692576000&Signature=Ff05pA3Ph9pKR-UKHYTXdlHcu1yGUDc63lqMGY6wv-S9cZ-gdiFQFcpTOPwOuhbnZ5zQswwakEB9WDY~uW9Op8P107I2IPTxKyCQdO95bjokzeEyjJJH3rlWvXT2QiZOIZpCszP9M1BFcOY1E5EDVjR1L1l4IEYVLByAeG8m6kA3LT9zm2FZw2aZIUkozXhdbdArR7j20XRZWQuoaBhNQxFCm4ED3XGgV~-hPI9~k6bdn-G~6C9n3eg1qCWvJ1CcqKq~OAwOON9~tnqMMTt7cIZxDBTESRCmhGGietbFS6YRfzYW8vy9nYgi7KV5kgJ4ZAOa2Z1sA~YSAIcJh~010w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
