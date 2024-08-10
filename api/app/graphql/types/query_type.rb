# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :pokemons, [Types::PokemonType], null: false, description: 'Returns a list of pokemons'
    def pokemons
      Pokemon.all.order(updated_at: :desc)
    end
  end
end
