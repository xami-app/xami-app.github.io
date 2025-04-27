import React, { HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import { FiCopy } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from 'react-toastify';

export const CodeBlock: React.FC<HTMLAttributes<HTMLElement> & ExtraProps> = ({
    node,
    className,
    children,
    ...props
}) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match?.[1] ?? 'text';
    const isInline = node?.tagName === 'code' && !className;
    const handleCopy = async () => {
        let text = '';

        // Type guard to check if child is a valid React element
        const processChild = (child: React.ReactNode): string => {
            if (typeof child === 'string') return child;
            if (typeof child === 'number') return child.toString();
            if (React.isValidElement(child)) {
                // If the child is a React element, recursively process its children
                return child.props.children ? processChild(child.props.children) : '';
            }
            return '';
        };

        if (Array.isArray(children)) {
            text = children.map(processChild).join('');
        } else if (typeof children === 'string') {
            text = children;
        }

        if (text) {
            await navigator.clipboard.writeText(text);
            toast("Copied to clipboard", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    if (isInline) {
        return (
            <code className="px-1 py-0.5 rounded bg-zinc-700 text-pink-400 text-sm font-mono">
                {children}
            </code>
        );
    }

    return (
        <div className="relative">
            <ToastContainer />
            <div className="code-header">
                <span>{language.toUpperCase()}</span>
                <Tooltip >

                </Tooltip>
                <button
                    data-tooltip-id="copy-tooltip"
                    data-tooltip-content="Copy"
                    className="copy-button"
                    onClick={handleCopy}>
                       <FiCopy size={14} />
                </button>
                <Tooltip id="copy-tooltip"/>
            </div>

            <pre className="no-margin overflow-x-auto">
                <code className={className} {...props}>
                    {children}
                </code>
            </pre>
        </div>
    );
};
