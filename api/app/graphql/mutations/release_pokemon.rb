module Mutations
  class ReleasePokemon < BaseMutation
    argument :id, ID, required: true

    type Types::PokemonType

    def resolve(id:)
      user = context[:current_user]
      pokemon = user.pokemons.find(id)

      return unless pokemon

      if pokemon.update(user_id: nil)
        pokemon
      else
        GraphQL::ExecutionError.new('Pokemon could not be released',
                                    extensions: { 'pokemon' => pokemon.errors.messages })
      end
    end
  end
end
