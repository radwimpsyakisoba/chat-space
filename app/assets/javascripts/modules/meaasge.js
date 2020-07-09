$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message_box" data-message-id=${message.id}>
          <div class="message_info">
            <div class="message_info_name">
              ${message.user_name}
            </div>
            <div class="message_info_date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__contents">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message_box" data-message-id=${message.id}>
        <div class="message_info">
          <div class="message_info_name">
            ${message.user_name}
          </div>
          <div class="message_info_date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__contents">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main_list').append(html);
      $('form')[0].reset();
      $('.main_list').animate({ scrollTop: $('.main_list')[0].scrollHeight});
      $('.message_send_button').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.message_send_button').prop("disabled", false);
    })
  })
});