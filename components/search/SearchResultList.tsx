import { SearchResult } from "@/app/search/page";
import { motion, Variants } from "framer-motion";
import { SearchResultCard } from "./SearchResultCard";

interface SearchResultListProps {
  results: SearchResult[];
  query: string;
  category: string;
}

export function SearchResultList({ results, query, category }: SearchResultListProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (<>
    <motion.div
        key={`${query}-${category}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
    >
      {results.map((item, index) => (
        <SearchResultCard item={item} query={query} key={index} />
      ))}
    </motion.div>
  </>);
}