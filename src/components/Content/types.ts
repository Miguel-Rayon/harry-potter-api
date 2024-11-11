import { ICharacter } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

export type TContent = {
  characters: ICharacter[];
  parameters: string;
  setParameters: Dispatch<SetStateAction<string>>;
};
