# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :release_pokemon, mutation: Mutations::ReleasePokemon
    field :create_pokemon, mutation: Mutations::CreatePokemon
    field :update_pokemon, mutation: Mutations::UpdatePokemon
    field :delete_pokemon, mutation: Mutations::ReleasePokemon
    field :create_user, mutation: Mutations::CreateUser
    field :login, mutation: Mutations::Login
  end
end
