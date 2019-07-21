class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "room_#{params[:room]}"

    room = Room.find params[:room]
    stream_for room
  end
end
