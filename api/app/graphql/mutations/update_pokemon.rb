module Mutations
  class UpdatePokemon < BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: true
    argument :kind, String, required: false
    argument :powers, String, required: false
    argument :image_url, String, required: false

    type Types::PokemonType

    def resolve(id:, name:, kind:, powers:, image_url:)
      pokemon = Pokemon.find(id)
      kind = pokemon.kind if kind.nil?
      powers = pokemon.powers if powers.nil?
      image_url = pokemon.image_url if image_url.nil?
      pokemon.update(name:, kind:, powers:, image_url:)
      pokemon
    end
  end
end
