import CalendarIcon from "../facility/CalendarIcon";
import UserIcon from "../facility/UserIcon";
import Button from "../facility/Button";
import FacilityMiniMap from "../facility/FacilityMiniMap";
import PhoneIcon from "../facility/PhoneIcon";
import MapPinIcon from "../facility/MapPinIcon";
import ClockIcon from "../facility/ClockIcon";

export default function HeroHalfImage({ name }) {
  return (
    <div className="h-full flex justify-between">
      <div className="pl-20 flex flex-col gap-6 justify-center w-[55%] py-20 sm:py-40">
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
      <img
        src="https://s3-alpha-sig.figma.com/img/1388/10d9/79b1f9547f452876f079d07433167ae8?Expires=1692576000&Signature=PKzL9PB2l58NNa8G-7kwU1sruup0AdMcnR2Zhzu64voVBtKteE8oIrpcbMrnnvLEecav0KkOaVizZkPIsGANqvGIOlC9odSf51ezh3Cg2c0m7Oohlt~NmogURdMUq73kqX3OxSS-GJEjtGtkj5LD3X7an1rYE1UUMHC9nYZ3Ir5Ue2OIsh6j0k~Edn~GKVoTlu4Uj3HcuO~SK6tMEHwH6PdZjhKmLaQ72JKJ3KGwtDYBE1gILriE8ao9XnF5pJ6uRoDnv0JuU5B-2k2Fh-Q~gFV8sUZrtfeD7~u8m6DpBDQik7~J7fNJqHXrV1V-MP5n7OukUrqhTPK9gmTZB82lbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
        className="w-[45%] object-cover"
      />
    </div>
  );
}
