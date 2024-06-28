"use client"
import React from "react";
import {UploadForm} from "@/app/upload/(form)/form"

export default function page() {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <h1>Upload Files to S3 Bucket</h1>
      <UploadForm />
    </div>
  );
}
