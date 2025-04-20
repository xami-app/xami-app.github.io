import { LuListCollapse } from "react-icons/lu";
import { Heading } from "../../../hooks/Headings.hooks";
import Panel from "../../lib/panels/SimplePanel";
import { scrollToElementWithOffset } from "../../../utils/Document.utils";

interface DocTOCProps {
    className?: string;
    headings: Heading[];
}

export const DocTOC: React.FC<DocTOCProps> = ({ className = "", headings }) => {
    const getClass = (depth: number) => {
        switch (depth) {
            case 1:
                return "font-bold text-gray-0 hover:text-gray-200";
            case 2:
                return "ml-4 font-semibold text-gray-200 hover:text-gray-400";
            default:
                return "ml-8 font-normal text-gray-400 hover:text-gray-500";
        }
    };

    return (
        <div className={`max-w-full w-full lg:w-[15rem] ${className}`}>
            <Panel title="Content" icon={<LuListCollapse />} backgroundClassName="bg-zinc-800 border border-zinc-700">
                <ul className="max-h-[70vh]">
                    {headings.map(h => (
                        <li key={h.id} className={`${getClass(h.depth)} transition-text duration-300`}>
                            <a
                                href={`#${h.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToElementWithOffset(h.id, 80);
                                }}
                            >
                                {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </Panel>
        </div>
    );
};

export default DocTOC;
