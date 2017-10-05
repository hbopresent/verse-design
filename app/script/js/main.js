(function play() {
  var board = document.getElementById("board");
  var blackBack = document.getElementById("blackBack");
  var yelBack = document.getElementById("yelBack");
  var redBack = document.getElementById("redBack");
  var text = document.getElementById("text");
  var textVerse = document.getElementById("textVerse");
  var lineup = document.getElementById("lineup");
  var linedown = document.getElementById("linedown");

  blackBack.addEventListener("animationend", function(e) {
    if(e.animationName == "stretchWidth") {
      board.style.transform = "rotateZ(180deg)";
      text.style.transform = "rotateZ(180deg)";
      // animation 2
      showLine();
    }
  });
  lineup.addEventListener("animationend", function(e) {
    if(e.animationName == "closelineup") {
      // animation 6
      closeBackground();
    }
  });
  // animation 1
  showBackground();

  function showBackground() {
    redBack.style.animation = "stretchWidth 0.3s ease-out forwards";
    yelBack.style.animation = "stretchWidth 0.3s 0.15s ease-out forwards";
    blackBack.style.animation = "stretchWidth 0.3s 0.25s ease-out forwards";
  }
  function closeBackground() {
    blackBack.style.animation = "cutWidth 0.3s ease-out forwards";
    yelBack.style.animation = "cutWidth 0.3s 0.15s ease-out forwards";
    redBack.style.animation = "cutWidth 0.3s 0.25s ease-out forwards";
  }
  function showLine() {
    lineup.style.animation = "showlineup 0.3s ease-out forwards";
    linedown.style.animation = "showlinedown 0.3s ease-out forwards";
    setTimeout(function() {
      // animation 3
      showText();
    }, 200);
    setTimeout(function() {
      // animation 4
      closeText();
    }, 2200);
  }
  function closeLine() {
    lineup.style.animation = "closelineup 0.3s ease-out forwards";
    linedown.style.animation = "closelinedown 0.3s ease-out forwards";
  }
  function showText() {
    textVerse.style.animation = "showText 0.5s ease-out forwards";
  }
  function closeText() {
    textVerse.style.animation = "closeText 0.5s ease-out forwards";
    setTimeout(function() {
      // animation 5
      closeLine();
    }, 500);
  }
}());
