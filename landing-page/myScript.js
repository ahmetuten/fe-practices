// $(document).ready(function() {
//     if ($(window).width() <= 768) {
//         // $(".select").val("OK");
//         alert("bakdfns")
//     } else {
//         // $(".select").val("SELECT");
//         alert("şgkamşk")
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    var selects = document.querySelectorAll('.select');
    
    selects.forEach(function(select) {
      if (window.innerWidth <= 768) {
        select.value = "OK";
      } else {
        select.value = "SELECT";
      }
    });
  });
  