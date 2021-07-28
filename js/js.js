 $('.carousel').carousel({
  interval: 3000
})
//$("html").niceScroll();
/*loading*/


$(window).load(function () {
  $(".rect1").fadeOut(1000,
    function () {
      $(".rect2").fadeOut(900,
        function () {
          $(".rect3").fadeOut(800,
            function () {
              $(this).parent().fadeOut(700)
              $("body").css("overflow", "auto")// غيري الخصائص في css خليلي overflow :auto
              $(".divscroll").css("display","block");// غيري الخصائص في css خليلي odisplay:block
              $(this).parent().remove();//ازالة الكلاس من html  بعد عمل الي انريده علمود اذا دخل احد على الكود مراح يشوقه

            });
        });
    });

});


/*scrolltop*/
var scrolln=$(".divscroll");//هنا دا ابرمج اني خافيه  الايقونه اكله من انزل و scroll يصير 700 اظهري الايقونه 

/*$(window).scroll(function()
{
 //console.log($(this).scrollTop())
 
  if($(this).scrollTop()>=700){
    scrolln.show();
  }
  else{
    scrolln.hide();

  }
});*/


$(".fa-chevron-down").click(function() {
              
  $('html, body').animate({scrollTop:(0)}, '2000');
});





//document.querySelector(".fa-chevron-down").addEventListener("click" ,e =>{
  //$("html, body").animate({ scrollTop: 0 },400);
     
  
  
 // $(".divscroll").click(function() { // من اضغط على الايقونه اصعدلي لفوك
  //  $("html, body").animate({ scrollTop: 0 },400);
  



var art1 = document.getElementById('art1');
var art2 = document.getElementById('art2');
var art3 = document.getElementById('art3');
var art4 = document.getElementById('art4');

var bu1 = document.getElementById('buart1')
var bu2 = document.getElementById('buart2')
var bu3 = document.getElementById('buart3')
var bu4 = document.getElementById('buart4')


//window.console.log(bu);


function myfun() {
  if (bu1.textContent === "LEARN MORE") {
    art1.style.display = "block";
    bu1.textContent = "NO MORE";
  }

  else if (bu1.textContent === "NO MORE") {
    bu1.textContent = "LEARN MORE";
    art1.style.display = "none";

  }
}



function myfun2() {
  if (bu2.textContent === "LEARN MORE") {
    art2.style.display = "block";
    bu2.textContent = "NO MORE";
  }

  else if (bu2.textContent === "NO MORE") {
    bu2.textContent = "LEARN MORE";
    art2.style.display = "none";

  }
}


function myfun3() {
  if (bu3.textContent === "LEARN MORE") {
    art3.style.display = "block";
    bu3.textContent = "NO MORE";
  }

  else if (bu3.textContent === "NO MORE") {
    bu3.textContent = "LEARN MORE";
    art3.style.display = "none";

  }
}



function myfun4() {
  if (bu4.textContent === "LEARN MORE") {
    art4.style.display = "block";
    bu4.textContent = "NO MORE";
  }

  else if (bu4.textContent === "NO MORE") {
    bu4.textContent = "LEARN MORE";
    art4.style.display = "none";

  }
}


