$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result =(number);
      $("#result").text(result);


    });
  });

  var pingPong = function(number) {
    var arr=[];
    for(i=1;<=number;i++)

    if(i % 3 === 0) && (i % 5 === 0) {
      arr.push("PingPong")
    }; else if (i % 5 === 0) {
    return ("pong")
    };else {
      if (i % 3 === 0) {
        return "ping"
    };
    else {
      return (i)
    };
