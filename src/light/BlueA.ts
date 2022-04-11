import { BluePallet } from "../pallets";

type Variants =
  | "blue50A"
  | "blue100A"
  | "blue200A"
  | "blue300A"
  | "blue400A"
  | "blue500A"
  | "blue600A"
  | "blue700A"
  | "blue800A"
  | "blue900A";

const BlueA: Record<Variants, string> = {
  blue50A: BluePallet["50"].setAlpha(0.35).toHslString(),
  blue100A: BluePallet["100"].setAlpha(0.35).toHslString(),
  blue200A: BluePallet["200"].setAlpha(0.35).toHslString(),
  blue300A: BluePallet["300"].setAlpha(0.35).toHslString(),
  blue400A: BluePallet["400"].setAlpha(0.35).toHslString(),
  blue500A: BluePallet["500"].setAlpha(0.35).toHslString(),
  blue600A: BluePallet["600"].setAlpha(0.35).toHslString(),
  blue700A: BluePallet["700"].setAlpha(0.35).toHslString(),
  blue800A: BluePallet["800"].setAlpha(0.35).toHslString(),
  blue900A: BluePallet["900"].setAlpha(0.35).toHslString(),
};

export default BlueA;
