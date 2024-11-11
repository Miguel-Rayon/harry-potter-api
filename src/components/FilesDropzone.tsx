import React, { useCallback } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Box } from "@mui/material";
import { IDropzone } from "@/interfaces/FileDropzone";

export const Dropzone = ({
  handleAdd,
  multiple = false,
  types,
  className,
  children,
  ...rest
}: IDropzone) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => handleAdd(acceptedFiles),
    [handleAdd]
  );

  const acceptTypes: Accept = types
    ? { [types]: [] }
    : { "image/jpeg": [], "image/png": [] };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: acceptTypes,
    multiple,
  });

  return (
    <Box {...rest}>
      <Box {...getRootProps()}>
        <input {...getInputProps()} />
        {children}
      </Box>
    </Box>
  );
};
