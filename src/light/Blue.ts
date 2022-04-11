import { BluePallet } from "../pallets";

type Variants =
  | "blue50"
  | "blue100"
  | "blue200"
  | "blue300"
  | "blue400"
  | "blue500"
  | "blue600"
  | "blue700"
  | "blue800"
  | "blue900";

const Blue: Record<Variants, string> = {
  blue50: BluePallet["50"].toHslString(),
  blue100: BluePallet["100"].toHslString(),
  blue200: BluePallet["200"].toHslString(),
  blue300: BluePallet["300"].toHslString(),
  blue400: BluePallet["400"].toHslString(),
  blue500: BluePallet["500"].toHslString(),
  blue600: BluePallet["600"].toHslString(),
  blue700: BluePallet["700"].toHslString(),
  blue800: BluePallet["800"].toHslString(),
  blue900: BluePallet["900"].toHslString(),
};

export default Blue;
