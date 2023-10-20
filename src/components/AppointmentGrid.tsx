import useWindowSize from "../hooks/useWindowSize";
import BodyText from "./atoms/BodyText";
import VStack from "./atoms/VStack";

const times = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

// mock function that gets today's date and the next 4 days
export function getDates() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const dates = [];
  for (let i = 0; i < 5; i++) {
    dates.push(`${mm}/${Number(dd) + i}/${yyyy}`);
  }
  return dates;
}

export default function AppointmentGrid() {
  const { width } = useWindowSize();

  const dates = getDates();

  // format 07/24/2023 as July 24
  const formattedDates = dates.map((date) => {
    const [month, day, year] = date.split("/");
    const monthName = new Date(`${month}/01/${year}`).toLocaleString(
      "default",
      { month: "long" }
    );
    return `${monthName} ${day}`;
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {formattedDates.slice(0, width && width < 640 ? 2 : 5).map((date) => (
        <VStack classname="gap-2.5">
          <p className="text-center text-neutral-500 text-base font-bold leading-normal">
            {date}
          </p>
          {times.map((time) => (
            <button
              key={`${date}-${time}`}
              className="h-10 px-4 py-2 bg-primary-green rounded justify-center items-center gap-2 inline-flex"
            >
              <div className="text-center text-white text-base font-bold leading-normal">
                {time}
              </div>
            </button>
          ))}
        </VStack>
      ))}
    </div>
  );
}
