import ImageGallery from "./components/ImageGallery";
import ListObject from "./components/ListObject";
import { UploadForm } from "@/app/listFiles/(form)/form";
import { revalidatePath } from "next/cache";


export default function Home() {

  revalidatePath("/listFiles");


  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery />
      <ListObject />
      <h1>Upload Files to S3 Bucket</h1>
      <UploadForm />
    </div>
  );
}
