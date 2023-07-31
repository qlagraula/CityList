import { container, grid } from "../styled-system/patterns";
import Search from "./components/Search";
import Cities from "./components/Cities";
import { useGetGroupedCodePostals } from "./hooks/useGetGroupedCodePostals";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading } = useGetGroupedCodePostals(debouncedSearch);

  return (
    <div
      className={container({
        padding: { base: 4, md: 6, lg: 8 },
        display: "flex",
        flexDirection: "column",
        gap: 6,
      })}
    >
      <Search onChange={(value) => setSearch(value)} />
      <div className={grid({ columns: 2, gap: 6 })}>
        <Cities
          isLoading={isLoading}
          cities={data?.getGroupedCodePostals?.metropolitan ?? []}
        />
        <Cities
          isLoading={isLoading}
          cities={data?.getGroupedCodePostals?.overseas ?? []}
          label="d'outre mer"
        />
      </div>
    </div>
  );
}

export default App;
