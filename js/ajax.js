function call() {
  var msg   = $('#formx').serialize();
     $.ajax({
       type: 'POST',
       url: '../vendor/telSend1.php',
       data: msg,
       success: function(data) {
         $('#results1').html(data);
         $('#phone1').val('');
       },
       error:  function(xhr, str){
   alert('Я отправил заявку в Telegram! ' + xhr.responseCode);
       }
     });

 };


 function callMe() {
  var msg   = $('#ajax_form').serialize();
     $.ajax({
       type: 'POST',
       url: '../vendor/telSend2.php',
       data: msg,
       success: function(data) {
         $('#results2').html(data);
         $('#phone2').val('');
       },
       error:  function(xhr, str){
   alert('Я отправил заявку в Telegram! ' + xhr.responseCode);
       }
     });

 }
//     $('#results').html('Вы не ввели номер').css({
//       'transition':'all linear .5s',
//       'color': 'red'
//     });
//     $('.input-base').css({'border':'2px solid red'})},
// });