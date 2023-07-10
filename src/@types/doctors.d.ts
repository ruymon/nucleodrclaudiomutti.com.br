import { ISocial } from "./generic";

export interface IDoctor {
  name: string;
  registration: string;
  specialty: string;
  description: string;
  image: string;
  social: ISocial[];
};