import { Dispatch, SetStateAction } from "react";

export type TPreview = {
  image: string;
  file: File;
};

export type TButtonUploadImage = {
  handleAddFile: (files: File[]) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  previews: TPreview[];
  setPreviews: Dispatch<SetStateAction<TPreview[]>>;
};
