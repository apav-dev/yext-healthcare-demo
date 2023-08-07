import AppleMap from "../AppleMap";

const FacilityMiniMap = ({ locations }) => {
  return (
    <div className="w-full sm:w-96">
      <div className="w-full h-64">
        <AppleMap locations={locations} />
      </div>
    </div>
  );
};

export default FacilityMiniMap;
