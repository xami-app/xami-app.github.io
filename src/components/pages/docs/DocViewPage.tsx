import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';

import 'prismjs/themes/prism-tomorrow.css';
import './DocViewPage.styles.css';

import { useHeadings } from '../../../hooks/Headings.hooks';
import { fetchMarkdown } from '../../../service/Markdown.service';
import DocMarkdownView from '../../custom/Docs/DocMarkdownView';
import DocSidebar from '../../custom/Docs/DocSidebar';
import InvalidParamsPage from '../lib/InvalidParamsPage';
import Offcanvas from '../../lib/modals/Offcanvas';

const DocViewPage: React.FC = () => {
  const { pathname } = useLocation();
  const markdownPath = `/docs/${pathname.replace(/^\/view\//, '')}.md`;
  const [showToC, setShowToC] = useState(false);

  const {
    data: markdown,
    isLoading,
  } = useQuery(['doc', markdownPath], () => fetchMarkdown(markdownPath), {
    retry: false,
  });

  const headings = useHeadings(markdown ?? '');

  if (isLoading) {
    return <div className="text-gray-400 p-6">📄 Loading document...</div>;
  }

  if (!markdown) {
    const fallbackPath = markdownPath.replace(/\.md$/, '');
    return (
      <InvalidParamsPage>
        <div>
          Could not find documentation page.
          <br />
          <span className="text-sm text-red-400">({fallbackPath})</span>
        </div>
      </InvalidParamsPage>
    );
  }

  return (
    <div className="flex w-full relative">
      {/* Mobile ToC Toggle */}
      <button
        className={`lg:hidden fixed ${showToC ? "top-4" : "top-14"} right-4 z-50 bg-zinc-800 text-white p-2 rounded shadow-md`}
        onClick={() => setShowToC(prev => !prev)}
      >
        <FiMenu size={20} />
      </button>

      {/* Markdown Content */}
      <div className="flex-grow px-4 lg:pr-64 transition-all">
        <DocMarkdownView markdown={markdown} />
      </div>

      {/* Desktop Table of Contents */}
      <aside className="hidden lg:block fixed top-12 right-4 w-60 max-h-[calc(100vh-100px)] overflow-y-auto">
        <DocSidebar mode='DESKTOP' headings={headings} />
      </aside>

      {/* Mobile ToC Offcanvas */}
      <Offcanvas isOpen={showToC} onClose={() => setShowToC(false)}>
        <DocSidebar mode="MOBILE" headings={headings} />
      </Offcanvas>
    </div>
  );
};

export default DocViewPage;
