# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_pokemon, mutation: Mutations::CreatePokemon
    field :update_pokemon, mutation: Mutations::UpdatePokemon
    field :delete_pokemon, mutation: Mutations::DeletePokemon
  end
end
