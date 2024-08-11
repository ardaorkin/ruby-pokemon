module Mutations
  class CreateUser < BaseMutation
    argument :email, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :password, String, required: true

    field :token, String, null: false
    field :errors, [String], null: false

    def resolve(email:, first_name:, last_name:, password:)
      user = User.new(email:, first_name:, last_name:, password:)
      hmac_secret = Rails.application.secrets.secret_key_base(ENV['SECRET_KEY_BASE'])

      if user.save
        token = JWT.encode({ user_id: user.id }, hmac_secret, 'HS256')
        {
          token:,
          errors: []
        }
      else
        {
          token: nil,
          errors: user.errors.full_messages
        }
      end
    end
  end
end
