import axios from "axios";

export const getCharacters = async (parameters: string) => {
  let endpoint = "/characters";
  if (parameters !== "") endpoint = "/characters?";
  const url = `${process.env.NEXT_PUBLIC_URL_LOCAL}${endpoint}${parameters}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};
