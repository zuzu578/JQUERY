$(document)

.on('click','#day',function(){
      if($('#day').val()=="야간모드"){
        $('#body1').css('background-color','black');
        $('#day').val('주간모드');
      }else{
         $('#body1').css('background-color','white');
        $('#day').val('야간모드');
      }

