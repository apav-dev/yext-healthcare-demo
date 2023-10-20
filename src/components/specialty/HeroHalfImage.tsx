import CalendarIcon from "../facility/CalendarIcon";
import UserIcon from "../facility/UserIcon";
import Button from "../facility/Button";
import FacilityMiniMap from "../facility/FacilityMiniMap";
import PhoneIcon from "../facility/PhoneIcon";
import MapPinIcon from "../facility/MapPinIcon";
import ClockIcon from "../facility/ClockIcon";

export default function HeroHalfImage({ name, photoURL }) {
  return (
    <div className="h-full flex justify-between">
      <div className="pl-20 flex flex-col gap-6 justify-center w-[55%] py-20 sm:py-40">
        <div className="w-[88px] h-3 bg-primary-green" />
        <h2 className="text-text-500 tracking-tight sm:text-6xl">{name}</h2>
        <div className="flex flex-row gap-4">
          <Button color="primary" href="#">
            <CalendarIcon color="white" />
            <span>Schedule Appointment</span>
          </Button>
          <Button color="secondary" href="#">
            <UserIcon color="black"/>
            <span>Find a Specialist</span>
          </Button>
        </div>
      </div>
      <img
        src={photoURL}
        alt=""
        className="w-[45%] object-cover max-h-fit"
      />
    </div>
  );
}
