module Mutations
  class CreatePokemon < BaseMutation
    # arguments passed to the `resolved` method
    argument :name, String, required: true
    argument :powers, String, required: false
    argument :kind, String, required: false
    argument :image_url, String, required: false
    # return type from the mutation
    type Types::PokemonType

    def resolve(name:, powers: nil, kind: nil, image_url: nil)
      Pokemon.create!(name:, powers:, kind:, image_url:)
    end
  end
end
