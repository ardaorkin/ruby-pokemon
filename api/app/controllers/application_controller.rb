class ApplicationController < ActionController::API
  def current_user
    token = request.headers['Authorization']&.split(' ')&.last
    return unless token

    begin
      hmac_secret = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode(token, hmac_secret, true, algorithm: 'HS256')
      user_id = decoded_token[0]['user_id']
      User.find_by(id: user_id)
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      nil
    end
  end
end
