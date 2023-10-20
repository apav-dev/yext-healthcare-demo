export default function SpecialistBanner({ name }) {
  return (
    <div className="w-full p-20 bg-primary-green flex-col justify-center items-center gap-8 inline-flex">
      <div className="self-stretch py-16 border border-white flex-col justify-center items-center gap-8 flex">
        <div className="text-center text-white text-4xl font-bold leading-10">
          <span>Get Care From Our Team of</span>
          <br />
          <span>{`${name} Specialists`}</span>
        </div>
        <a href="/doctor-finder">
          <button className="px-8 py-4 rounded-full border border-white justify-center items-center gap-2 inline-flex hover:cursor-pointer hover:bg-zinc-900">
            <div className="text-center text-white text-base font-bold leading-normal">
              <span>Find a Specialist</span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
