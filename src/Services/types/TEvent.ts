import { JSXElementConstructor } from "react";
import { TAnswer } from "./TAnswer";

export type TEvents = {
  Newspaper: React.ReactNode;
  content: React.ReactNode;
  answers: TAnswer[];
};
