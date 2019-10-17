# frozen_string_literal: true

# ActionCable.server.broadcast("room_#{room.id}", room_message)

class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{params[:room]}"
  end

  def unsubscribed
    stop_all_streams
  end
end
