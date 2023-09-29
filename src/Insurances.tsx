import { ComplexImageType, Image } from "@yext/sites-components";
import GridContainer from "./atoms/GridContainer";
import useWindowSize from "./hooks/useWindowSize";
import HStack from "./atoms/HStack";
import BodyText from "./atoms/BodyText";

export interface InsurancesProps {
  insurances?: {
    label: string;
    // image?: ComplexImageType;
  }[];
}

export default function Insurances({ insurances }: InsurancesProps) {
  const { width } = useWindowSize();

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
