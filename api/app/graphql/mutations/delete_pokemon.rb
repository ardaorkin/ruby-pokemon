module Mutations
  class DeletePokemon < BaseMutation
    argument :id, ID, required: true

    type Types::PokemonType

    def resolve(id:)
      pokemon = Pokemon.find(id)
      pokemon.destroy
      pokemon
    end
  end
end
