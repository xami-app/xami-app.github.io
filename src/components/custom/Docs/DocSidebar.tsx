import React from 'react';
import TableOfContent from './DocTOC';
import { Heading } from '../../../hooks/Headings.hooks';

interface DocSidebarProps {
  headings: Heading[];
  className?: string;
  mode: "DESKTOP" | "MOBILE";
}

const DocSidebar: React.FC<DocSidebarProps> = ({ headings, className = '', mode }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <TableOfContent headings={headings} className={`${mode == "MOBILE" ? "mt-10": ""}`} />
    </div>
  );
};

export default DocSidebar;
