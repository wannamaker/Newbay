class ApplicationController < ActionController::API 
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  def authorize_request
    header = request.headers['Authorization']
    
    header = header.split(' ').last if header
    # puts header, 'MMMMMMMMM'
    begin
      @decoded = decode(header)
      puts @decoded[:id], 'OOOOOOO'
      @current_user = User.find(@decoded[:id])
      puts @current_user, 'GGGGGGG'
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

end
