import consumer from "./consumer"

$(function () {
  $('[data-channel-subscribe="room"]').each(function (index, element) {
    var $element = $(element);
    var room_id = $element.data('room-id');
    var messageTemplate = $('[data-role="message-template"]');

    $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000)

    consumer.subscriptions.create(
      {
        channel: "RoomChannel",
        room: room_id
      },
      {
        received: function (data) {
          var date = new Date(data.updated_at);
          var content = messageTemplate.children().clone(true, true);

          content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
          content.find('[data-role="message-text"]').text(data.message);
          content.find('[data-role="message-date"]').text(date.toLocaleString('pt-br'));
          $element.append(content);
          $element.animate({ scrollTop: $element.prop('scrollHeight') }, 1000);
        }
      }
    )
  });
});


