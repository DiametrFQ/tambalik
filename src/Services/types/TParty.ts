export type TParty = {
  color: string;
  politica: string;
  firstName: string;
  lastName: string;
  work: string;
  pop: number;
  par: number;
};

export type partysNames =
  | "monarchist"
  | "liberal"
  | "democratic"
  | "nationalist"
  | "green"
  | "socialist";

export type PartyKeys =
  | "color"
  | "firstName"
  | "lastName"
  | "par"
  | "pop"
  | "politica"
  | "work";

export type PartyPower = "pop" | "par";