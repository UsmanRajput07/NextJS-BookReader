"use client";
export default function DownloadLink({ fileLink }: { fileLink: string }) {
  const downloadPdf = () => {
    window.open(fileLink, "_blank");
  };
  return (
    <button
      onClick={downloadPdf}
      className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Download Book
    </button>
  );
}
