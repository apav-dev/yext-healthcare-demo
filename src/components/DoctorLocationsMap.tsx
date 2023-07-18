import { Map } from "@yext/pages/components";
import { GoogleMaps } from "@yext/components-tsx-maps";
import mapStyles from "../../defaultMapStyles.json";

export default function DoctorLocationsMap() {
  return (
    <div className="Locator">
      <Map
        provider={GoogleMaps}
        providerOptions={{ styles: mapStyles }}
        clientKey="gme-yextinc"
        // bounds={results.map((data) => data.coordinate)}
        padding={{ top: 100, bottom: 200, left: 50, right: 50 }}
        className="h-full"
      >
        {/* {results.map((data, index) => (
        <CustomMarker
          key={data.id}
          coordinate={data.coordinate}
          id={data.id}
          index={index + 1}
        />
      ))} */}
      </Map>
    </div>
  );
}
