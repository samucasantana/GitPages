
function main(){
  $('.container').hide();
  $('.container').fadeIn(1000);
  $('.fas').on('click',function(){
    $('.sidebar').toggleClass('active');
    $('.icon-menu').toggleClass('.left');
  });
}
$(document).ready(main);
  
 /*button = document.querySelector('.fab').addEventListener("click", function(event){
  document.querySelector('.sidebar').classList.toggle('active');
},false)
*/