$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideToggle(3000);
    $("#development").slideToggle(3000);
  });
  $("#development").click(function(){
    $("#development").slideToggle(3000);
    $("#development-image").slideToggle(3000);
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideToggle(3000);
    $("#design").slideToggle(3000);
  });
  $("#design").click(function(){
    $("#design").slideToggle(3000);
    $("#design-image").slideToggle(3000);
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideToggle(3000);
    $("#product").slideToggle(3000);
  });
  $("#product").click(function(){
    $("#product").slideToggle(3000);
    $("#product-image").slideToggle(3000);
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });

});

$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});

$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});

$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });

  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });

  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });

  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});


$("#work1").hover(function(){
  $(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work2").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work3").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work4").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work5").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work6").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work7").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$("#work8").hover(function(){
$(this).animate({opacity:'0.3'});
}, function(){
$(this).animate({opacity:'1'});
});

$(document).ready(function(){
  $("form#form34A").submit(function(event){
    // event.preventDefault();
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (Name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});