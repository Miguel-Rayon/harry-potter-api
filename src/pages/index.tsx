import React, { Fragment, useState } from "react";
import Main from "@/layouts/Main";
import Container from "@/components/Container";
import { TPreview } from "@/components/ButtonUploadImage/types";
import { getFileThumbnail } from "@/utils/file/getFileThumbnail";
import { ContentCharacters } from "@/components/Content";
import { ICharacter } from "@/interfaces";

type THome = {
  characters: ICharacter[];
};

export default function Home({ characters }: THome) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<TPreview[]>([]);
  const [parameters, setParameters] = useState("");

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
          <ContentCharacters
            characters={characters || []}
            parameters={parameters}
            setParameters={setParameters}
          />
        </Fragment>
      </Container>
    </Main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_LOCAL}/characters`);
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}
