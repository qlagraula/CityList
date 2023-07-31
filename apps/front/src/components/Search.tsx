import { css } from "../../styled-system/css";

type SearchProps = {
  onChange?: (value: string) => void;
};

function Search({ onChange }: SearchProps) {
  return (
    <div
      className={css({
        display: "flex",
        backgroundColor: "gray.300",
        padding: 2,
        borderRadius: "lg",
        gap: 2,
        alignItems: "center",
        fontWeight: "bold",
      })}
    >
      Je recherche...{" "}
      <input
        placeholder="... une ville, un code postal"
        className={css({
          flexGrow: 1,
          backgroundColor: "white",
          borderRadius: "lg",
          paddingX: 2,
          paddingY: 1,
        })}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  );
}

export default Search;
