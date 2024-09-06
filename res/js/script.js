function preloader() {
    'use strict';
    $('.preloader').delay(100).fadeOut(10);
}
//$(preloader);
$(document).ready(function(){
   //4A9AED8E33F14BF79E1BD877213876365FAF2EE88438A9C15520B5717174EA1A4464E3EE1EF1008492C431919C460A9A

   $("#sendEmail").click(function(){
      const fromEmail = $("#fromEmail").val();
      const fromName = $("#fromName").val();
      const fromTel = $("#fromTel").val();
      const subject = $("#subject").val();
      let body = $("#body").val();
      body = "<h1>"+fromName + "("+fromEmail +") 님의 메일입니다. </h1><br>" + "전화번호 : " + fromTel + "<br><br>" + body;
  
      Email.send({
         SecureToken: "4A9AED8E33F14BF79E1BD877213876365FAF2EE88438A9C15520B5717174EA1A4464E3EE1EF1008492C431919C460A9A",
         To: 'musecom@gmail.com',
         From: fromEmail,
         Subject: subject,
         Body: body
      }).then(
         message => { console.log("이메일을 성공적으로 보냈습니다."); }
      ).catch(
         error => { console.log("이메일을 보내는데 실패했습니다.");}
      )

    }); 

});

