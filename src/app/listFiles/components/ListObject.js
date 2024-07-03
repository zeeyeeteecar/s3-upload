"use server";
import {
  S3Client,
  GetObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
  },
});

export default async function ListObject() {
  const bucketName = process.env.NEXT_AWS_S3_BUCKET_NAME;

  const command = new ListObjectsCommand({ Bucket: bucketName });
  const { Contents } = await s3Client.send(command);
  const contentsList =
    Contents && Contents.map((c) => ` • ${c.Key}`).join("\n");

  console.log("\nHere's a list of files in the bucket:");
  console.log(contentsList + "\n");

  return <>{Contents && Contents.map((c) => <li>{c.Key}</li>)}</>;
}
