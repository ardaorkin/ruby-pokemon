module Mutations
  class Login < BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true

    field :token, String, null: true
    field :errors, [String], null: false

    def resolve(email:, password:)
      user = User.find_by(email:)
      hmac_secret = Rails.application.secrets.secret_key_base(ENV['SECRET_KEY_BASE'])
      if user&.authenticate(password)
        token = JWT.encode({ user_id: user.id }, hmac_secret, 'HS256')
        {
          token:,
          errors: []
        }
      else
        {
          token: nil,
          errors: ['Invalid email or password']
        }
      end
    end
  end
end
