import { FuschiaPallet } from "../pallets";

type Variants =
  | "fuschia50A"
  | "fuschia100A"
  | "fuschia200A"
  | "fuschia300A"
  | "fuschia400A"
  | "fuschia500A"
  | "fuschia600A"
  | "fuschia700A"
  | "fuschia800A"
  | "fuschia900A";

const FuschiaA: Record<Variants, string> = {
  fuschia50A: FuschiaPallet["50"].setAlpha(0.35).toHslString(),
  fuschia100A: FuschiaPallet["100"].setAlpha(0.35).toHslString(),
  fuschia200A: FuschiaPallet["200"].setAlpha(0.35).toHslString(),
  fuschia300A: FuschiaPallet["300"].setAlpha(0.35).toHslString(),
  fuschia400A: FuschiaPallet["400"].setAlpha(0.35).toHslString(),
  fuschia500A: FuschiaPallet["500"].setAlpha(0.35).toHslString(),
  fuschia600A: FuschiaPallet["600"].setAlpha(0.35).toHslString(),
  fuschia700A: FuschiaPallet["700"].setAlpha(0.35).toHslString(),
  fuschia800A: FuschiaPallet["800"].setAlpha(0.35).toHslString(),
  fuschia900A: FuschiaPallet["900"].setAlpha(0.35).toHslString(),
};

export default FuschiaA;
