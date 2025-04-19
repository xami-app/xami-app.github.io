import { RiErrorWarningFill } from "react-icons/ri";

export default function InvalidParamsPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center text-center w-[80%] md:w-[50%] h-[50%] bg-zinc-700 shadow-lg rounded-2xl p-6">
        <RiErrorWarningFill className="text-yellow-300 text-6xl md:text-9xl mb-4" />
        <h1 className="text-6xl md:text-8xl font-bold text-gray-50">400</h1>
        <div className="text-xl md:text-2xl pt-4 text-gray-300">{children}</div>
      </div>
    </div>
  );
}
