import CalendarIcon from "./CalendarIcon";
import UserIcon from "./UserIcon";
import Button from "./Button";
import FacilityMiniMap from "./FacilityMiniMap";
import PhoneIcon from "./PhoneIcon";
import MapPinIcon from "./MapPinIcon";
import ClockIcon from "./ClockIcon";

export default function Hero({ name, coordinates, address, phone }) {
  function addDashes(f: string) {
    const parsedPhone = phone.substring(2);
    const cleanPhone =
      parsedPhone.slice(0, 3) +
      "-" +
      parsedPhone.slice(3, 6) +
      "-" +
      parsedPhone.slice(6);
    return cleanPhone;
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 mt-32">
      <img
        src="https://s3-alpha-sig.figma.com/img/71b1/9a4c/034c67fd1437dbebf64d34725fa9a7cf?Expires=1691971200&Signature=MMSu-xuZuSVHzvLrPoP8m8dNBisClPdxQIi7OxN1Rsw1ehKND4HroeMiJVZ-Fa33EY~8LbCJ4S-tjriGWfhYukbybEwsapI1YGLQGKrj-vNK2Bvze8UqX3L3AERBPCUQMIRyXY68zTgOhpB5s6EZonfAe1O0BLuMX9PjXdTXT9i65SszdIUtVcp85tveSl4TR1NwpsDlUxtMMp7ew3NZNn8L0G-9mj4yvSyYckZwexIyonkjVcE7Y68rQKMLsmCUaTTZR~8bWA7him9TEnx5jtE5mCy7nMpK-H7KX0W3LoeNpOW09OurFJ0e4PX7I2WrbqgZRz4G3ZmruZkHPBJYrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.6]"
      />
      <div className="px-10 lg:px-20 h-full py-10 sm:py-12 flex justify-between">
        <div className="flex flex-col gap-6 justify-center">
          <div className="w-[88px] h-3 bg-green-700" />
          <h2 className="text-text-500 tracking-tight text-white sm:text-6xl">
            {name}
          </h2>
          <div className="flex flex-row gap-4">
            <Button color="primary">
              <CalendarIcon color="white" />
              <span>Schedule Appointment</span>
            </Button>
            <Button color="secondary">
              <UserIcon />
              <span>Find a Specialist</span>
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-96">
          <FacilityMiniMap
            locations={[{ address, geocodedCoordinate: coordinates }]}
          />
          <div className="flex flex-col gap-4 bg-white p-6 pb-12 text-xl text-zinc-900 font-light">
            <div className="flex items-center gap-2">
              <div className="w-5 flex justify-center">
                <PhoneIcon />
              </div>
              <span className="text-zinc-900">{addDashes(phone)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 flex justify-center">
                <MapPinIcon />
              </div>
              <span className="text-zinc-900">
                20 Shattuck Street, Boston, MA, 02115
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 flex justify-center">
                <ClockIcon />
              </div>
              <span className="text-zinc-900">
                Open 24 Hours / 7 Days a week
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
