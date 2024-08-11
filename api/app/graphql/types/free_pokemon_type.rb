module Types
  class FreePokemonType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :powers, String, null: true
    field :kind, String, null: true
    field :image_url, String, null: true

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
