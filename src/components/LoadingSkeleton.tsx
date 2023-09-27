const LoadingSkeleton = ({ nRows = 10 }: { nRows?: number }) => {
  return (
    <div className="flex flex-col animate-pulse gap-y-6 w-full">
      <div className="flex flex-row gap-x-4">
        <div className="w-6 h-6 bg-gray-300 rounded-md" />
        <div className="w-60 h-6 bg-gray-300 rounded-md" />
      </div>
      {[...Array(nRows).keys()].map((i) => {
        return (
          <div key={i} className="flex flex-row gap-x-4 w-full">
            <div className="w-6 h-6 bg-gray-300 rounded-md" />
            <div className="flex flex-col gap-y-2">
              <div className="h-4 bg-gray-300 w-80 rounded-md" />
              <div className="h-4 bg-gray-300 w-32 rounded-md" />
              <div className="h-4 bg-gray-300 w-56 rounded-md" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingSkeleton;
