import React, { useMemo, useState } from "react";

export type SearchHOCProps = {
  data: {
    //Generic list of objects
    [k: string]: string | number | boolean;
  }[];
};

const Search: React.FC<SearchHOCProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const memo = useMemo(() => {
    const upSearchTerm = searchTerm.toUpperCase();
    return Object.values(data).filter((obj) => {
      let str = Object.values(obj).join(" ");
      return str.indexOf(upSearchTerm);
    });
  }, [searchTerm, data]);

  return (
    <div>
      {memo && (
        <>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {memo.map((data) => {
            return <h3>{Object.values(data).join(" ")}</h3>;
          })}
        </>
      )}
    </div>
  );
};

export default Search;
