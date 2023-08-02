import { Image } from "@yext/pages/components";
import GridContainer from "./atoms/GridContainer";
import BodyText from "./atoms/BodyText";
import HStack from "./atoms/HStack";
import useWindowSize from "../hooks/useWindowSize";
import { ImageType } from "../types/autogen";

export interface InsurancesProps {
  insurances?: {
    label: string;
    image?: ImageType;
  }[];
}

export default function Insurances({ insurances }: InsurancesProps) {
  const { width } = useWindowSize();

  console.log("insurances", insurances);
  return (
    <GridContainer
      columnCount={width && width < 640 ? 1 : 2}
      classname="pt-16 gap-y-16"
    >
      {insurances?.map((insurance, i) => (
        <HStack key={`insurance-${i}`}>
          {insurance.image && (
            <Image
              width={50}
              height={50}
              layout="fixed"
              image={insurance.image}
            />
          )}
          <BodyText className="pl-12" text={insurance.label} />
        </HStack>
      ))}
    </GridContainer>
  );
}
