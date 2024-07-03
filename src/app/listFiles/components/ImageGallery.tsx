import Image from "next/image";
import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";



const getImage = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/s3-listFiles");
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

export default async function ScreenshotImage() {
  const imageUrl = await getImage();

  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="s3url" width="500" height="500" />
      ) : (
        <p>Loading image...</p>
      )}
      
    </div>
  );
}
