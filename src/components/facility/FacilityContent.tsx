import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";

export default function FacilityContent({ description }) {
  const refOverview = useRef(null);
  const refProviders = useRef(null);
  const refServices = useRef(null);
  const refInsurance = useRef(null);

  const [sectionList, setSectionList] = useState([
    {
      sectionId: "overview",
      sectionTitle: "Overview",
      isActive: true,
      ref: refOverview,
    },
    {
      sectionId: "providers",
      sectionTitle: "Healthcare Providers",
      isActive: false,
      ref: refProviders,
    },
    {
      sectionId: "services",
      sectionTitle: "Services & Specialties",
      isActive: false,
      ref: refServices,
    },
    {
      sectionId: "insurance",
      sectionTitle: "Insurance Accepted",
      isActive: false,
      ref: refInsurance,
    },
  ]);

  return (
    <div className="mt-8">
      <div className="flex w-[.8] px-20 gap-20">
        <ul className="flex flex-col min-w-fit font-sans-bold gap-4 text-base sticky top-8 h-fit">
          {sectionList.map((section) => {
            return (
              <li
                key={section.sectionId}
                className="cursor-pointer"
                onClick={() => {
                  section.ref.current?.scrollIntoView({ behavior: "smooth" });
                  setSectionList(
                    sectionList.map((s) => {
                      if (s.sectionId === section.sectionId) {
                        return { ...s, isActive: true };
                      } else {
                        return { ...s, isActive: false };
                      }
                    })
                  );
                }}
              >
                <span>{section.sectionTitle}</span>
                {section.isActive && (
                  <div className="mt-1 h-1 w-full bg-[#3B8257]"></div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-8">
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular" ref={refOverview}>
            Overview
          </h3>
          <BodyText text={description} />
          <BodyText text={description} />
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular" ref={refProviders}>
            Healthcare Providers
          </h3>
          <BodyText text={description} />
          <BodyText text={description} />
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular" ref={refServices}>
            Services & Specialties
          </h3>
          <BodyText text={description} />
          <BodyText text={description} />
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular" ref={refInsurance}>
            Insurance Accepted
          </h3>
          <BodyText text={description} />
          <BodyText text={description} />
        </div>
      </div>
    </div>
    /* <div onClick={handleClick}>Click me</div>
        <div style={{ height: "150rem", backgroundColor: "black" }} />
        <div ref={ref} style={{ backgroundColor: "lightblue" }}>
          Coding Beauty
        </div>
        <div className="h-10" style={{ backgroundColor: "red" }} /> */
  );
}
