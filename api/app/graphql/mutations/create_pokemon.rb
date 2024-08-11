module Mutations
  class CreatePokemon < BaseMutation
    # arguments passed to the `resolved` method
    argument :name, String, required: true
    argument :powers, String, required: false
    argument :kind, String, required: false
    argument :image_url, String, required: false
    argument :user_id, ID, required: true
    # return type from the mutation
    type Types::PokemonType

    def resolve(name:, user_id:, powers: nil, kind: nil, image_url: nil)
      Pokemon.create!(
        name:,
        powers:,
        kind:,
        image_url:,
        user_id:
      )
    end
  end
end
