import { useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

export interface Heading {
  id: string;
  text: string;
  depth: number;
}

export function useHeadings(markdown: string) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const tree = unified().use(remarkParse).parse(markdown);
    const headingList: Heading[] = [];

    function visit(node: any) {
      if (node.type === 'heading') {
        const text = node.children
          .filter((child: any) => child.type === 'text')
          .map((child: any) => child.value)
          .join('');
        const id = text.toLowerCase().replace(/\s+/g, '-');
        headingList.push({ id, text, depth: node.depth });
      }
      if (node.children) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
    setHeadings(headingList);
  }, [markdown]);

  return headings;
}