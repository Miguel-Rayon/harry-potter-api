import { ICharacter } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

export type TListCharacter = {
  characters: ICharacter[];
  parameters: string;
};

export type TCardCharacter = {
  character: ICharacter;
};

export type TFilters = {
  parameters: string;
  setParameters: Dispatch<SetStateAction<string>>;
};
