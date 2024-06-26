"use client";
import PaginationComponent from "./PaginationComponent";
import CollectionCard from "./CollectionCard";
import { useBookmarkContext } from "@/context/BookmarkContext";

const SearchResults = ({
  filteredData,
  mediaType,
  page,
  totalPages,
  setPage,
}) => {
  const { searchInput } = useBookmarkContext();

  return (
    <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
      <h2 className="cat-heading font-light">
        Found <span>{filteredData?.total_results.toLocaleString()}</span> result
        <span
          className={`${filteredData?.results.length > 1 ? "inline" : "hidden"}`}
        >
          s
        </span>{" "}
        for '<span>{searchInput}</span>'
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-6 md:mt-[25px] md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
        {filteredData?.results.map((item, index) => (
          <CollectionCard key={index} item={item} mediaType={mediaType} />
        ))}
      </div>

      <PaginationComponent
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </section>
  );
};

export default SearchResults;
