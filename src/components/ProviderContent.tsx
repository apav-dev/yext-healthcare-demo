import { useRef, useState } from "react";
import BodyText from "./atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "../components/facility/FacilityContent.css";
import RelatedProviderCard from "./facility/RelatedProviderCard";
import FacilitySpecialtyCard from "./facility/BasicContentCard";
import BasicContentCard from "./facility/BasicContentCard";
import Button from "./facility/Button";
import Reviews from "./Reviews";
import StaticReviews from "./StaticReviews";

export interface ProviderContentProps {
  description: string;
}

export default function ProviderContent({ description }: ProviderContentProps) {
  return (
    <div className="flex flex-col gap-12 mb-20">
      <div className="flex flex-col gap-12" id="about">
        <div className="flex flex-col gap-6">
          <div className="w-[88px] h-3 bg-green-700" />
          <h3 className="text-text-500 text-zinc-900">About</h3>
        </div>
        <div className="text-neutral-500 text-base font-medium xl:pr-40">
          {description}
        </div>
      </div>
      <div className="flex flex-col gap-12" id="reviews">
        <div className="flex flex-col gap-6">
          <div className="w-[88px] h-3 bg-green-700" />
          <h3 className="text-text-500 text-zinc-900">Reviews</h3>
        </div>
        <StaticReviews />
      </div>
    </div>
  );
}
