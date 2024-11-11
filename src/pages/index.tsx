import React, { Fragment, useState } from "react";
import Main from "@/layouts/Main";
import Container from "@/components/Container";
import { TPreview } from "@/components/ButtonUploadImage/types";
import { getFileThumbnail } from "@/utils/file/getFileThumbnail";
import { Content } from "@/components/Content";
import { ICharacter } from "@/interfaces";

type THome = {
  characters: ICharacter[];
};

export default function Home({ characters }: THome) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<TPreview[]>([]);

  const handleAddFile = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    newFiles.forEach(async (file) => {
      const image = await getFileThumbnail(file);

      const previewObject = {
        image,
        file,
      };

      setPreviews((prev) => [...prev, previewObject]);
    });
  };

  return (
    <Main>
      <Container>
        <Fragment>
          <Content characters={characters} />
        </Fragment>
      </Container>
    </Main>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/characters");
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}
