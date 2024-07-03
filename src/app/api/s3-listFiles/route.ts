import { NextResponse } from "next/server";
import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

type UrlDataType = {
  url: any;
};

export async function GET(): Promise<Response> {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
      Key: "Ad2024_2.png",
    });

    const { Bucket, Key } = (command as any).input;
    const url = `https://${Bucket}.s3.amazonaws.com/${Key}`;

    return new NextResponse(url);
  } catch (error) {
    console.error("Error fetching image from S3:", error);
    return new NextResponse("Error fetching image from S3");
  }
}
