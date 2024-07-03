import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-slate-400 grid place-items-center">
      <div className="w-[1000px] h-[500px] bg-white grid place-items-center">
        <Link
          href="/"
          className="h-20 w-80 border-2 text-slate-600 rounded-full  grid place-items-center hover:bg-slate-50"
        >
          Upload client side
        </Link>
        <Link
          href="/upload"
          className="h-20 w-80 border-2 text-slate-600 rounded-full  grid place-items-center hover:bg-slate-50"
        >
          Upload server side
        </Link>
        <Link
          href="/listFiles"
          className="h-20 w-80 border-2 text-slate-600 rounded-full  grid place-items-center hover:bg-slate-50"
        >
          List Files
        </Link>
      </div>
    </main>
  );
}
