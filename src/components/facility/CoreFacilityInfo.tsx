import { Address } from "@yext/pages/components";
import { FaMapMarker, FaPhone } from "react-icons/fa";
import FacilityMiniMap from "./FacilityMiniMap";

export function CoreFacilityInfo({ coordinates, address, phone }) {
  return (
    <div className="flex flex-col gap-2">
      <Address
        address={address}
        lines={[["line1"], ["city", "region", "postalCode"]]}
      />
      <div className="flex items-center gap-2">
        <FaPhone className="text-#3B8257" />
        <span>{phone}</span>
      </div>
    </div>
  );
}
