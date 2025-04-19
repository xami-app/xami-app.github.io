import { RiErrorWarningFill } from "react-icons/ri";

export default function ServerErrorPage({ message = "Interner Serverfehler. Bitte versuche es später noch einmal."}: { message: string }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center text-center w-[80%] md:w-[50%] h-[50%] bg-zinc-700 shadow-lg rounded-2xl p-6">
        <RiErrorWarningFill className="text-red-500 text-6xl md:text-9xl mb-4" />
        <h1 className="text-6xl md:text-9xl font-bold text-gray-50">500</h1>
        <p className="text-xl md:text-3xl pt-4 text-gray-300">
          {message}
        </p>
      </div>
    </div>
  );
}