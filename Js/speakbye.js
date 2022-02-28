(function (window) {
    var byspeaker = {};
  var speakbye = "Goodbye";
  

  byspeaker.bye=function (name) {
    console.log(speakbye + " " + name);
  }
  window.byspeaker = byspeaker;
})(window);
