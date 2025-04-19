import { RiLockUnlockFill } from "react-icons/ri";

export default function NoAccessPage() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center text-center w-[80%] md:w-[50%] h-[50%] bg-zinc-700 shadow-lg rounded-2xl p-6">
                <RiLockUnlockFill className="text-red-300 text-6xl md:text-9xl mb-4" />
                <h1 className="text-6xl md:text-9xl font-bold text-gray-50">403</h1>
                <p className="text-xl md:text-3xl pt-4 text-gray-300">No access to this page.</p>
            </div>
        </div>
    );
}