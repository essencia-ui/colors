import { FuschiaPallet } from "../pallets";

type Variants =
  | "fuschia50"
  | "fuschia100"
  | "fuschia200"
  | "fuschia300"
  | "fuschia400"
  | "fuschia500"
  | "fuschia600"
  | "fuschia700"
  | "fuschia800"
  | "fuschia900";

const Fuschia: Record<Variants, string> = {
  fuschia50: FuschiaPallet["50"].toHslString(),
  fuschia100: FuschiaPallet["100"].toHslString(),
  fuschia200: FuschiaPallet["200"].toHslString(),
  fuschia300: FuschiaPallet["300"].toHslString(),
  fuschia400: FuschiaPallet["400"].toHslString(),
  fuschia500: FuschiaPallet["500"].toHslString(),
  fuschia600: FuschiaPallet["600"].toHslString(),
  fuschia700: FuschiaPallet["700"].toHslString(),
  fuschia800: FuschiaPallet["800"].toHslString(),
  fuschia900: FuschiaPallet["900"].toHslString(),
};

export default Fuschia;
