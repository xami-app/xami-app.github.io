import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export const CollapsibleViewer = ({ title, content }: { title: string; content?: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-zinc-800 rounded-xl p-4 mb-4">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center text-white w-full text-left font-semibold"
            >

                <FaChevronRight className={`mr-2 transition-transform ${open ? "rotate-90" : ""}`}  />
                {title}
            </button>
            {open && (
                <pre className="mt-2 text-sm text-zinc-200 whitespace-pre-wrap break-words bg-zinc-900 p-4 rounded-lg max-h-96 overflow-auto">
                    {content || "<empty>"}
                </pre>
            )}
        </div>
    );
};