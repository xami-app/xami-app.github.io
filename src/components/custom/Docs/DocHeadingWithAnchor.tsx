import React from "react";
import { ComponentPropsWithoutRef } from "react";

interface DocHeadingWithAnchorProps extends ComponentPropsWithoutRef<"h1"> {
  level: 1 | 2 | 3;
  node?: any;
}

export const DocHeadingWithAnchor: React.FC<DocHeadingWithAnchorProps> = ({
  level,
  node,
  children,
  ...rest
}) => {
  let id = node?.properties?.id;
  if (!id && children) {
    id = children
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
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
          href={`${window.location.href}?section=${id}`}
          className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 text-sm"
          onClick={(e) => {
            e.preventDefault();
            const fullUrl = `${window.location.href}?section=${id}`;
            navigator.clipboard.writeText(fullUrl);
          }}
          title="Copy link"
        >
          🔗
        </a>
      )}
    </>
  );
};

