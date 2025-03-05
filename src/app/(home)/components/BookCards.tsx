import Image from "next/image";
import Link from "next/link";
import {Book} from "@/types/types";
const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default async function BookList() {
  const respose = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`);
  if(!respose.ok){
    throw new Error("Failed to fetch data");
  }
  const book : {book: Book[]} = await respose.json();
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 h-[35rem] overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {book?.map((item, idx) => {
          return (
            <div
              className="bg-white shadow-md rounded-lg p-4 flex flex-row space-x-2 h-58  hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              key={idx}
            >
              <div className="flex-grow">
                <Image
                  src={item.coverImg}
                  alt="Book Image"
                  width={200}
                  height={200}
                  className="w-40 h-full object-contain rounded-md"
                />
              </div>

              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 text-transform: capitalize">
                  {item.title || "Book Title"}
                </h2>
                <p className="text-md text-gray-600 mt-2 text-transform: capitalize">
                  {item?.author?.name || "Author Name"}
                </p>
                <Link
                  href={`/book/${item._id}`}
                  className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-700 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
