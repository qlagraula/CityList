import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "../api";
import { gql } from "graphql-request";
import { City } from "../types";

export function useGetGroupedCodePostals(search = "") {
  return useQuery({
    queryKey: ["get-groupedCodePostals", search],
    queryFn: async () => {
      const data = await graphQLClient.request(gql`
        query {
          getGroupedCodePostals(search: "${search}") {
            metropolitan {
              nomCommune
              codePostal
              id
            }
            overseas {
              nomCommune
              codePostal
              id
            }
          }
        }
      `);
      return data as {
        getGroupedCodePostals: { metropolitan?: City[]; overseas?: City[] };
      };
    },
  });
}
