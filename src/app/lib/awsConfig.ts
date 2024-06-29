import AWS from "aws-sdk";

export  function s3() {
  AWS.config.update({
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
    region: process.env.NEXT_AWS_S3_REGION,
  });

  return  new AWS.S3();
}
