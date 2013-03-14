$(document).ready(function(){
  $('#logo').live('mouseenter touchstart',function(){
  	$("#L_BLOCK").removeClass('face');
    $('#logo').attr('class','lockup');
  });
  $('#logo').live('mouseleave touchend', function(){
    $('#logo').attr('class', 'reverse');
  });


  $('#logo')[0].addEventListener("webkitTransitionEnd", function(e){
    if(e.target.id == 'L_VERTICAL' && $(this).attr('class') == 'reverse'){
        //$(this).attr('class','hovering');
        $("#L_BLOCK").addClass('face');
    }
  }, false);

  $('#logo')[0].addEventListener("selectstart", function(e){
    return false;
  }, false);



  var status = "sleep";
  var mouthOpen = false;
  var count = 0;
    
  
  // on mouse move
  

  $(document).mousemove(function(e){
    
    
    var docW = $(window).width();
    var docH = $(window).height();
    
    var diffX = (docW/2)-1000 - e.clientX;
    var diffY = (docH/2)-1000 - e.clientY;
    
    //var dist = distance(docW/2, 250 , e.clientX, e.clientY);
    var mouseX = (docW/2) - e.clientX;
    if(mouseX >= 0){
      var eye_left = Math.floor( diffX / -100 ) +'%';
    }else{
      var eye_left = Math.floor( diffX / -100 ) + 20 +'%';
    }
    var eye_top = Math.floor( diffY / -30 ) +'%'; 
    $(".eye .pupil").css({ "left":eye_left, "top":eye_top});
  });

});




// helpers

var distance = function(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
