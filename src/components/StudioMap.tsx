import { LocationMap } from "@yext/pages/components";
// import { Coordinate } from "../types/autogen";
import { GoogleMaps } from "@yext/components-tsx-maps";

type Coordinate = {
  latitude: number;
  longitude: number;
};

export interface StudioMapProps {
  coordinate: Coordinate;
}

export default function StudioMap({ coordinate }: StudioMapProps) {
  const mappinSVG = (
    <svg
      width="56"
      height="58"
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
        fill="#15803D"
        stroke="black"
        strokeOpacity="0.5"
      />
      <path
        d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
        fill="white"
      />
    </svg>
  );
  return (
    <LocationMap
      className="w-full basis-1/3 drop-shadow-lg"
      clientKey="gme-yextinc"
      coordinate={coordinate}
      provider={GoogleMaps}
      singleZoom={15}
    >
      {mappinSVG}
    </LocationMap>
  );
}
