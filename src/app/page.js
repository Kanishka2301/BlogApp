import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to to-blue-300 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-4">
          Browse our blog colection
        </h2>
        <Link
          className="bg-white text-sm text-blue-400 font-semibold py-2 px-6 rounded"
          href={"/blogs"}
        >
          Explore blogs
        </Link>
      </div>
    </div>
  );
}
