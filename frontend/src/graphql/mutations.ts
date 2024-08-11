import { gql } from "@apollo/client";

export const CREATE_POKEMON = gql`
  mutation CreatePokemon($input: CreatePokemonInput!) {
    createPokemon(input: $input) {
      id
      name
      powers
      kind
      imageUrl
    }
  }
`;

export const DELETE_POKEMON = gql`
  mutation DeletePokemon($input: DeletePokemonInput!) {
    deletePokemon(input: $input) {
      id
    }
  }
`;

export const UPDATE_POKEMON = gql`
  mutation UpdatePokemon($input: UpdatePokemonInput!) {
    updatePokemon(input: $input) {
      id
      name
      powers
      kind
      imageUrl
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
