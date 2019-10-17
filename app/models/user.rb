class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, uniqueness: true, presence: true

  def gravatar_url
    gravatar_id = Digest::MD5::hexdigest(email).downcase
    "https://gravatar.com/avatar/#{gravatar_id}.png"
  end

  def online?
    uri   = URI.parse(ENV['REDIS_URL'] || ENV['REDISTOGO_URL'])
    redis = Redis.new(url: uri)

    redis.get("user_#{id}_online").present?
  end
end
