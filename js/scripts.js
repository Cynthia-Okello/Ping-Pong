//User Interface
$(document).ready(function() {
    $("form").click(function(event) {
      event.preventDefault();
      var number = $("#number").val();
      var result =parseInt(number);
      Username(result);
      cynthia.forEach(function(result) {
        $("#outcome").append("<li>" + result + "</li>");
      });
    });
   });


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
