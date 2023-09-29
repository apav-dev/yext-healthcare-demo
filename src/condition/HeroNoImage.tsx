import CalendarIcon from "../facility/CalendarIcon";
import UserIcon from "../facility/UserIcon";
import Button from "../facility/Button";
import FacilityMiniMap from "../facility/FacilityMiniMap";
import PhoneIcon from "../facility/PhoneIcon";
import MapPinIcon from "../facility/MapPinIcon";
import ClockIcon from "../facility/ClockIcon";

export default function HeroNoImage({ name }) {
  return (
    <div className="h-full flex justify-between">
      <div className="pl-20 flex flex-col gap-6 justify-center py-8 bg-stone-50 w-full">
        <div className="w-[88px] h-3 bg-green-700" />
        <h2 className="text-text-500 tracking-tight sm:text-6xl">{name}</h2>
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
    </div>
  );
}
