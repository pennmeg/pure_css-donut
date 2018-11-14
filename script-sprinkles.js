document.addEventListener("DOMContentLoaded", function() { 
  // console.log("--- Hello World ---");
  var sprinkleButton = document.getElementById("button--sprinkles");
  sprinkleButton.addEventListener("click", addSprinkles);
  function addSprinkles(){
    // console.log("=== sprinkleButton ===");
    console.log("--- Add the Sprinkles! ---");
    var sprinkles = document.getElementsByClassName("sprinkle");
    // console.log("All sprinkles: ", sprinkles);
    for (var i = 0; i < sprinkles.length; i++) {
      // ---- Have sprinkles appear using display:block;
      // sprinkles[i].style.display = "block";
      // console.log("--- Sprinkles should be visible ---");
      // --- Decided to practice CSS Animations and have sprinkles fall from above
      sprinkles[i].classList.add("s--" + [i+1]);
      // console.log("--- Sprinkles should fall in ---");
    }
  };
});
