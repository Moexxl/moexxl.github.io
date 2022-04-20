$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
  $(".btn").click(x => {
    let x1 = $(".nameZone").val();
    let x2 = $(".emailZone").val();
    let x3 = $(".subjectZone").val();
    let x4 = $(".messageZone").val();
    let bdy = "name:" + x1 + "<br/>" +"email:" + x2 + "<br/>" + "subject" +x3 + "<br/><br/><br/>"+x4;
    console.log(bdy)
    Email.send({
      Host : "smtp.gmail.com",
      Username : "moexxxxlll@gmail.com",
      Password : "jjpoxuovuiiivlnl",
      To : 'moexxxxlll@gmail.com',
      From :x2,
      Subject : x3,
      Body :bdy
  }).then(
    message => {
      console.log(message)
      alert("Success fully sent.. we will contact you shortly")
    }
  );
  })
  
});

