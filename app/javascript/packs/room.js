$(function () {
  $('#new_room_message').on('ajax:success', function () {
    $(this).find('input[type="text"]').val('');
  });

  $('#room_message_message').on('keyup', function () {
    $('#send_message').prop('disabled', !$(this).val());
  });
});
