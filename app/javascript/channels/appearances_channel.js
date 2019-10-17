import consumer from "./consumer"

$(function () {
  consumer.subscriptions.create(
    {
      channel: 'AppearancesChannel'
    },
    {
      received: function (data) {
        var user;
        user = $(".user-" + data['user_id']);
        return user.toggleClass('online', data['online']);
      }
    }
  );
});
