
$(document).ready(function() {
  $('#allelements').hide();
  $('#Blink_Button').click(function() {
    $('#Whats_My_Age_Again').hide();
    $('#First_Date').hide();
    $('#Not_Now').hide();
    $('#Shes_Out_Of_Her_Mind').hide();
   $('#allelements').slideToggle();

 });

 $('.song_samples').click(function(){
   $('#Whats_My_Age_Again').hide();
   $('#First_Date').hide();
   $('#Not_Now').hide();
   $('#Shes_Out_Of_Her_Mind').hide();
   //console.log($(this).attr("id"));
   $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});

switch ($(this).attr("id")) {

  case "Enema":
 $('#Whats_My_Age_Again').show();
   break;
 case "TakeOff":
   $('#First_Date').show();
   break;
 case "Greatest":
   $('#Not_Now').show();
   break;
 case "California":
   $('#Shes_Out_Of_Her_Mind').show();
   break;
}
});
});
