(function (window) {
    var hellospeaker={};
    var speakhello = "hello";


hellospeaker.speak=function (name) {
    console.log(speakhello+" "+name);
    
}

window.hellospeaker=hellospeaker;
})(window);