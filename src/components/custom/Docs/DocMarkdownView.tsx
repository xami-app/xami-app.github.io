import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism";
import remarkGfm from "remark-gfm";

interface DocMarkdownViewProps {
    className?: string;
    markdown: string;
}

export const DocMarkdownView: React.FC<DocMarkdownViewProps> = ({ className = "", markdown }) => {
    return (
        <div className={`markdown-body p-6 ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypePrism]}
                components={{
                    h1: ({ node, ...props }) => {
                        const id = String(props.children).toLowerCase().replace(/\s+/g, '-');
                        return <h1 id={id} {...props} />;
                    },
                    h2: ({ node, ...props }) => {
                        const id = String(props.children).toLowerCase().replace(/\s+/g, '-');
                        return <h2 id={id} {...props} />;
                    },
                    h3: ({ node, ...props }) => {
                        const id = String(props.children).toLowerCase().replace(/\s+/g, '-');
                        return <h3 id={id} {...props} />;
                    },
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
};

export default DocMarkdownView;