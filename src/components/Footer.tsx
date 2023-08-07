import Icon from "./atoms/Icon";

export default function Footer() {
  return (
    <div className="justify-between items-center inline-flex w-full ">
      <div className="self-stretch justify-start items-center gap-6 flex">
        <div className="w-32 h-32 p-2.5 bg-green-700 justify-center items-center gap-2.5 inline-flex">
          <Icon name="home" height="12" width="12" color="text-white" />
        </div>
        <div className="justify-start items-start gap-12 flex">
          <div className="text-center text-neutral-500 text-[13px] font-normal leading-normal">
            About
          </div>
          <div className="text-center text-neutral-500 text-[13px] font-normal leading-normal">
            Careers
          </div>
          <div className="text-center text-neutral-500 text-[13px] font-normal leading-normal">
            News
          </div>
          <div className="text-center text-neutral-500 text-[13px] font-normal leading-normal">
            Contact
          </div>
          <div className="text-center text-neutral-500 text-[13px] font-normal leading-normal">
            Login
          </div>
        </div>
      </div>
      <div className="p-6 flex-col justify-start items-end gap-4 inline-flex">
        <div className="justify-start items-start gap-4 inline-flex">
          <div className="px-4 py-2 rounded-[999px] justify-center items-center gap-2 flex">
            <a
              href="/search"
              className="flex items-center space-x-2 hover:underline"
            >
              <span>Search</span>
              <Icon name="search" height="4" width="4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
