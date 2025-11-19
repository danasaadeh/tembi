import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface BreadcrumbsProps {
  items: Array<{ label: string; to?: string }>;
  activeIndex?: number; // index of active/current item (defaults to last)
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, activeIndex }) => {
  const active = activeIndex ?? items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-gray-400 justify-center md:justify-start">
        {items.map((it, idx) => {
          const isActive = idx === active;

          return (
            <li key={it.label} className="flex items-center">
              {it.to && !isActive ? (
                <Link
                  to={it.to}
                  className="text-gray-500 hover:text-gray-700 font-medium"
                >
                  {it.label}
                </Link>
              ) : (
                <span
                  className={`${
                    isActive ? "text-black font-semibold" : "text-gray-400"
                  }`}
                >
                  {it.label}
                </span>
              )}

              {idx < items.length - 1 && (
                <ChevronRightIcon className="text-gray-300 mx-2 !w-4 !h-4" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
