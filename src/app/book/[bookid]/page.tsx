import { Book } from "@/types/types";
import Image from "next/image";
import React from "react";
import DownloadLink from "./components/DownloadLink";


export default async function page({ params }: { params: { bookid: string } }) {
  let book: Book | null = null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/books/${params?.bookid}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    book = await response.json();
  } catch (err: any) {
    throw new Error("Failed to fetch data");
  }
  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section (Text Content) */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          {book?.title || "Book Title"}
        </h1>
        <h2 className="text-xl text-gray-700 text-transform: capitalize">
          {book?.author?.name || "by Author Name"}
        </h2>
        <p className="text-lg text-gray-600 italic text-transform: capitalize">
          {book?.genre || "Genre"}
        </p>

        <p className="text-gray-800">{book?.description || "Description"}</p>
        <DownloadLink fileLink={book?.file || ""}/>
      </div>

      {/* Right Section (Book Image) */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-center">
        <Image
          src={book?.coverImg || "/bookCover.jpg"}
          alt="Book Cover"
          width={300}
          height={200}
          className="w-70 h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}
