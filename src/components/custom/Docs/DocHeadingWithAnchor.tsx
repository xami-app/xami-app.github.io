import React from "react";
import { ComponentPropsWithoutRef } from "react";
import { useLocation } from "react-router";

interface DocHeadingWithAnchorProps extends ComponentPropsWithoutRef<"h1"> {
  level: 1 | 2 | 3;
  node?: {
    properties?: {
      id?: string;
    };
  };
}

export const DocHeadingWithAnchor: React.FC<DocHeadingWithAnchorProps> = ({
  level,
  node,
  children,
  ...rest
}) => {
  const location = useLocation();
  const basePath = `${window.location.origin}#${location.pathname}`;
  
  let id = node?.properties?.id;

  if (!id && typeof children === "string") {
    id = children.toLowerCase().replace(/\s+/g, "-");
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      id,
      className: "group scroll-mt-[120px]",
      ...rest,
    },
    <>
      <span>{children}</span>
      {id && (
        <a
          href={`${basePath}?section=${id}`}
          className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 text-sm"
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(`${basePath}?section=${id}`);
          }}
          title="Copy link"
        >
          🔗
        </a>
      )}
    </>
  );
};
