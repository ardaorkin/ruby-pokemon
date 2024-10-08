# frozen_string_literal: true

module Types
  class PokemonType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :powers, String, null: true
    field :kind, String, null: true
    field :image_url, String, null: true
    field :trainer, Types::UserType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def trainer
      return unless object.user_id

      User.find(object.user_id)
    end

    def self.authorized?(object, context)
      super && context[:current_user].id == object.user_id
    end
  end
end
