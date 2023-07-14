import { type Link } from "next/link";
import { ReactNode } from "react";

export interface IContact {
  icon: ReactNode;
  values: Link[];
}