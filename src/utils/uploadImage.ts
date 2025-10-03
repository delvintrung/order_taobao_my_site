import cloudinary from "../lib/cloudinary";

export const uploadToCloudinary = async (file: any) => {
  try {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const base64String = fileBuffer.toString("base64");
    const dataUri = `data:${file.type};base64,${base64String}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "mysite_feedback",
      resource_type: "auto",
    });
    console.log("result", result);
    return result.secure_url;
  } catch (error) {
    console.log("Error in uploadToCloudinary", error);
    throw new Error("Error uploading to cloudinary");
  }
};
