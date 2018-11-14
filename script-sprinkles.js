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
      sprinkles[i].style.display = "block";
      // console.log("--- Sprinkles should be visible ---");
    }
  };
});
