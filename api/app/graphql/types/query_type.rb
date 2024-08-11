# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :pokemons, [Types::PokemonType], null: false, description: 'Returns a list of pokemons'
    field :free_pokemons, [Types::FreePokemonType], null: true, description: 'Returns a list of free pokemons'

    def pokemons
      context[:current_user].pokemons
    end

    def free_pokemons
      Pokemon.where(user_id: nil).to_a
    end
  end
end
