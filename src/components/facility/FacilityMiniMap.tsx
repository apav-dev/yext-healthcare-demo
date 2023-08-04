import { useState } from "react";
import AppleMap from "../AppleMap";

const FacilityMiniMap = ({ locations }) => {
  return (
    <div className="w-full sm:w-[400px]">
      <div className="w-full h-80">
        <AppleMap locations={locations} />
      </div>
    </div>
  );
};

export default FacilityMiniMap;
