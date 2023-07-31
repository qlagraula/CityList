import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import { City } from "../types";
import Toast from "./Toast";

type CitiesProps = {
  isLoading: boolean;
  label?: string;
  cities: City[];
};

function Cities({
  isLoading = false,
  label = "de métropole",
  cities = [],
}: CitiesProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "gray.300",
        padding: 4,
        borderRadius: "lg",
        gap: 4,
        alignItems: "center",
        fontWeight: "medium",
      })}
    >
      <h2
        className={css({
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "2xl",
        })}
      >
        Ville {label}
      </h2>
      {!isLoading && (
        <>
          <Toast
            label={`${
              cities.length
                ? `${cities.length} ville${cities.length > 1 ? "s" : ""}`
                : "Aucune ville"
            } correspondant au texte saisi`}
            success={!!cities.length}
          />
          {!!cities.length && (
            <div className={grid({ columns: 2, gap: 4, width: "100%" })}>
              {cities.map((city) => (
                <div
                  key={city.id}
                  className={css({
                    backgroundColor: "gray.700",
                    width: "100%",
                    paddingX: 4,
                    paddingY: 2,
                    color: "white",
                    borderRadius: "lg",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  })}
                >
                  <div>{city.nomCommune}</div>
                  <div className={css({ color: "gray.400" })}>
                    {city.codePostal}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cities;
