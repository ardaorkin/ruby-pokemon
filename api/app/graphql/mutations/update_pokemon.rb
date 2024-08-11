module Mutations
  class UpdatePokemon < BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: true
    argument :kind, String, required: false
    argument :powers, String, required: false
    argument :image_url, String, required: false

    type Types::PokemonType

    def resolve(id:, name:, kind:, powers:, image_url:)
      user = context[:current_user]
      pokemon = user.pokemons.find(id)

      return unless pokemon

      if pokemon.update(name:, kind:, powers:, image_url:)
        pokemon
      else
        GraphQL::ExecutionError.new('Pokemon could not be updated')
      end
    end
  end
end
