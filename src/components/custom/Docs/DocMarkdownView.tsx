import React from "react";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism";
import remarkGfm from "remark-gfm";
import { DocHeadingWithAnchor } from "./DocHeadingWithAnchor";
import { CodeBlock } from "./CodeBlock";

interface DocMarkdownViewProps {
  className?: string;
  markdown: string;
}

export const DocMarkdownView: React.FC<DocMarkdownViewProps> = ({
  className = "",
  markdown,
}) => {
  return (
    <div className={`markdown-body p-6 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        components={{
          h1({ node, ...props }) {
            return <DocHeadingWithAnchor level={1} node={node} {...props} />;
          },
          h2({ node, ...props }) {
            return <DocHeadingWithAnchor level={2} node={node} {...props} />;
          },
          h3({ node, ...props }) {
            return <DocHeadingWithAnchor level={3} node={node} {...props} />;
          },
          code: CodeBlock
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default DocMarkdownView;
