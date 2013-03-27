var Logo = {
  init : function(){
    //Logo.build;  // Builds Markup
    Logo.bind();  // Binds User Interaction
    Logo.listen();  //Binds CSS Animation Listeners
  },
  bind : function(){
    $('#logo').live('mouseenter touchstart',function(){
      clearTimeout(revealTimer);
      $("#logo").addClass('panic');
      $("#logo").addClass('lockup');
    });
    $('#logo').live('mouseleave touchend', function(){
        clearTimeout(revealTimer);
        $('#logo').attr('class', 'reverse');
    });
    //set timer for reveal of logo
    var revealTimer = setTimeout(function(e){
      $('#logo').removeClass('lockup');
      $('#logo').addClass('reverse');
    },1500);

    var boredTimer;

    $(document).live('mousemove touchend',function(e){
      $('.face .eyes').removeClass('bored');
      clearTimeout(boredTimer);
      if($("#logo").hasClass('face')){
        boredTimer = setTimeout(function(e){
          $('.face .eyes .eye .pupil').attr('style','');
          $('#logo').addClass('bored');
        },2000);
      }

      var docW = $(window).width();
      var docH = $(window).height();
      
      var diffX = (docW/2)-1000 - e.clientX;
      var diffY = (docH/2)-1200 - e.clientY;
      
      /*var dist = distance(docW/2, 250 , e.clientX, e.clientY);
      console.log(dist);*/

      var mouseX = (docW/2) - e.clientX;
      if(mouseX >= 0){
        var eye_left = Math.floor( diffX / -100 ) +'%';
      }else{
        var eye_left = Math.floor( diffX / -100 ) + 20 +'%';
      }
      var eye_top = Math.floor( diffY / -30 ) +'%'; 
      $(".eye .pupil").css({ "left":eye_left, "top":eye_top});
    });
  },
  listen : function(){
    $('#logo')[0].addEventListener("webkitTransitionEnd", function(e){
      /*
      if(e.target.offsetParent.id == 'L_BLOCK' && $(this).hasClass('panic')){
          console.log('panic done');
          $("#logo").removeClass('panic');
          $("#logo").removeClass('face');
          $('#logo').attr('class','lockup');
      }*/

      if(e.target.id == 'L_VERTICAL' && $(this).hasClass('reverse')){
          //$(this).attr('class','hovering');
          console.log('reserve done');
          $("#logo").removeClass('reverse');
          $("#logo").addClass('face');
          boredTimer = setTimeout(function(e){
            $('.face .eyes .eye .pupil').attr('style','');
            $('#logo').addClass('bored');
          },3000);

      }

      if(e.target.id == 'L_VERTICAL' && $(this).hasClass('lockup')){
          //$(this).attr('class','hovering');
          allowLeave = true;
          $("#logo").removeClass('panic');
          $("#logo").removeClass('face');
          console.log('lockup done');
          //$("#logo").removeClass('lockup');
      }
    }, false);

    $('#logo')[0].addEventListener("selectstart", function(e){
      return false;
    }, false);
  }
};

$(document).ready(function(){
  Logo.init();
});




// helpers

var distance = function(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
