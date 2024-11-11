import React from "react";
import { Dropzone } from "../FilesDropzone";
import { Button } from "@mui/material";
import { IconUpload } from "@tabler/icons-react";
import { TButtonUploadImage } from "./types";

export const ButtonUploadImage = ({
  handleAddFile,
  setFiles,
  files,
  setPreviews,
  previews,
}: TButtonUploadImage) => {
  return (
    <Dropzone
      handleAdd={handleAddFile}
      multiple
      types="image/jpeg, image/gif, image/png, image/jpg"
    >
      <Button
        startIcon={<IconUpload size={16} />}
        variant="contained"
        color="primary"
      >
        Subir imagén
      </Button>
    </Dropzone>
  );
};
