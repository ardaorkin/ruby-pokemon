export type Pokemon = {
  id: string;
  name: string;
  powers: string;
  kind: string;
  imageUrl: string;
};

export type CreatePokemonInput = {
  name: string;
  powers?: string;
  kind?: string;
  imageUrl?: string;
};
