import FacilitySpecialtyCard from "../facility/FacilitySpecialtyCard";

export default function ServicesBanner({ specialties }) {
  return (
    <div className="flex flex-col gap-12 px-20 py-8">
      <div className="flex flex-col gap-6">
        <div className="w-[88px] h-3 bg-green-700" />
        <h3 className="text-text-500 text-zinc-900">Our Services</h3>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-x-24">
        {specialties &&
          specialties
            ?.slice(0, 12)
            .map((spec) => (
              <FacilitySpecialtyCard key={spec.id} specialty={spec} />
            ))}
      </div>
    </div>
  );
}
