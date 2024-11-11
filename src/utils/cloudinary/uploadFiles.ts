/**
 * Sube un solo archivo a Cloudinary y devuelve la URL del archivo subido.
 * @param file - Archivo a subir a Cloudinary
 * @returns URL segura del archivo subido
 */
export const uploadSingleFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
  );

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.secure_url as string;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

/**
 * Sube múltiples archivos a Cloudinary y devuelve un array de URLs de los archivos subidos.
 * @param files - Array de archivos a subir
 * @returns Array de URLs de los archivos subidos
 */
export const uploadMultipleFiles = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map((file) => uploadSingleFile(file));
  return await Promise.all(uploadPromises);
};
