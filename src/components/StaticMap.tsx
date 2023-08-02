import { AddressType } from "../types/autogen";
import Address from "./Address";
import VStack from "./atoms/VStack";

export interface StaticMapProps {
  coordinates: { latitude: number; longitude: number };
  address?: AddressType;
}

export const initialProps: StaticMapProps = {
  coordinates: { latitude: 40.71427, longitude: 74.00597 },
};

export default function StaticMap({ coordinates, address }: StaticMapProps) {
  console.log("coordinates", coordinates);
  return (
    <VStack classname="py-6 flex flex-col">
      <img
        className="w-full"
        width="300"
        height="200"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${coordinates.latitude}` +
          "," +
          `${coordinates.longitude}` +
          "&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${coordinates.latitude}` +
          "," +
          `${coordinates.longitude}` +
          "&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
        }
      />
      {address && (
        <Address address={address} containerClassname="text-center pt-4" />
      )}
    </VStack>
  );
}
