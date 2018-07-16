
//Business Interface
var cynthia=[];
function user(result) {
  for(index=1;index<=result;index++){


    if (index % 15 === 0){
      cynthia.push("pingpong");
    }
    else if (index % 3 === 0) {
      cynthia.push("ping");
    }
    else if (index % 5 === 0) {
      cynthia.push("pong");
    }
    else {
      my.push(index);
    }
  }
    }




//User Interface
$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      var number = $("#number").val();
      var result =parseInt(number);
      user(result);
      cynthia.forEach(function(result) {
        $("#result").append("<li>" + result + "</li>");
      });
    });
   });
