import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons {
      id
      name
      powers
      kind
      imageUrl
    }
  }
`;
