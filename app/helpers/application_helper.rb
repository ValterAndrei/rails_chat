# frozen_string_literal: true

module ApplicationHelper
  def gravatar_url(user)
    gravatar_id = Digest::MD5.hexdigest(user.email).downcase
    "https://gravatar.com/avatar/#{gravatar_id}.png"
  end

  def online_status(user)
    content_tag :span, user.username,
                class: "user-#{user.id} online_status #{'online' if user.online?}"
  end
end
