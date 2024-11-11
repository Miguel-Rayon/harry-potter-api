import cloudinary from "@/service/cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { image } = req.body;

    try {
      const uploadResult = await cloudinary.uploader.upload(image, {
        folder: "uploads",
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      });
      res.status(200).json({ url: uploadResult.secure_url });
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      res.status(500).json({ error: "Error al subir la imagen" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
