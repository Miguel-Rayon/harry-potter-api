import React from "react";
import { BoxProps } from "@mui/material";

export interface IFilesDropzone
  extends Omit<
    BoxProps,
    "CustomFunction" | "content" | "compress" | "multiple" | "types"
  > {
  customFunction?: (urls: string[]) => void;
  content: React.ReactNode;
  compress?: boolean;
  multiple?: boolean;
  types?: string;
}

export interface IDropzone
  extends Omit<BoxProps, "handleAdd" | "content" | "multiple" | "types"> {
  handleAdd: (files: File[]) => void;
  multiple?: boolean;
  types?: string;
}
