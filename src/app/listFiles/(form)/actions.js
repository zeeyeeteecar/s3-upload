"use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import React from "react";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(file, fileName) {
  const fileBuffer = file;

  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);

  try {
    const response = await s3Client.send(command);
    console.log("File uploaded successfully", response);
    return fileName;
  } catch (error) {
    throw error;
  }
}

export async function uploadFile(prevState, formDate) {
  try {
    const file = formDate.get("file");
    console.log(file);
    if (file.size === 0) {
      return { status: "error", message: "Please select a file" };
    }

    console.log(formDate);

    const buffer = Buffer.from(await file.arrayBuffer());
    await uploadFileToS3(buffer, file.name);
    revalidatePath("/");
    return { status: "success", message: "File has been uploaded" };
  } catch (error) {
    return { status: "error", message: "Fail to upload file" };
  }
}
