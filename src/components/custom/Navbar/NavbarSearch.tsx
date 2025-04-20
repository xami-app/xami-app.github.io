import { useEffect, useRef, useState } from "react";
import MiniSearch from "minisearch";
import SearchBar from "../../lib/form/SearchBar";
import { useNavigate } from "react-router";

interface SearchResult {
  id: number;
  title: string;
  file: string;
  content: string;
}

interface NavbarSearchProps {
  className?: string;
}

export const NavbarSearch: React.FC<NavbarSearchProps> = ({ className = "" }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [index, setIndex] = useState<MiniSearch | null>(null);
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/search.json");
      const rawData = await res.json();

      const docs: SearchResult[] = rawData.map((item: any, i: number) => ({
        id: i,
        title: item.title,
        file: item.file,
        content: item.content.map((b: any) => b.value).join(" "),
      }));

      const miniSearch = new MiniSearch({
        fields: ["title", "content"],
        storeFields: ["title", "file"],
        searchOptions: {
          boost: { title: 2 },
          prefix: true,
        },
      });

      miniSearch.addAll(docs);
      setIndex(miniSearch);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!search || !index) {
      setResults([]);
      return;
    }

    const found = index.search(search) as unknown as SearchResult[];
    setResults(found);
  }, [search, index]);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const topResults = results.slice(0, 5);
  const tooManyResults = results.length > 5;

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <SearchBar
        id="NAVBAR-SEARCH"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => {
          if (results.length > 0) setShowResults(true);
        }}
        inputRef={inputRef}
        placeholder="Search the docs..."
      />

      {search && topResults.length > 0 && showResults && (
        <div className="absolute top-full mt-1 w-full bg-zinc-900 border border-zinc-700 shadow-lg rounded-md max-h-[300px] overflow-auto">
          <ul>
            {topResults.map((res, idx) => (
              <li key={idx}>
                <a
                  onClick={() => navigate(`/docs/${res.file.replace(/\\/g, "/")}`)}
                  href={`#/docs/${res.file.replace(/\\/g, "/")}`}
                  className="block px-4 py-2 hover:bg-zinc-800 text-sm text-zinc-100"
                >
                  <div className="font-medium">{res.title}</div>
                  <div className="text-zinc-400 text-xs truncate">{res.content}</div>
                </a>
              </li>
            ))}
          </ul>

          {tooManyResults && (
            <div className="px-4 py-2 text-xs text-zinc-400 border-t border-zinc-700">
              Too many results. Try narrowing your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
