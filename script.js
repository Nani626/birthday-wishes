// Add this to the existing JavaScript
document.getElementById("giftButton").addEventListener("click", function() {
    document.getElementById("wishText").innerText = "HAPPY BIRTHDAY CHERRY!! ALWAYS BE  HAPPY AND SMILING";
  });
  
  document.getElementById("wishesButton").addEventListener("click", function() {
    document.getElementById("wishText").innerText = "HAPPY BITHDAY CHERRY!! ALWAYS BE  HAPPY AND SMILING";
  });
  
  document.getElementById("giftButton").addEventListener("mouseover", function() {
    document.getElementById("giftButton").innerText = "Wishes";
    document.getElementById("wishesButton").innerText = "Gift";
  });
  
  document.getElementById("giftButton").addEventListener("mouseout", function() {
    document.getElementById("giftButton").innerText = "Gift";
    document.getElementById("wishesButton").innerText = "Wishes";
  });
  
  document.getElementById("wishesButton").addEventListener("mouseover", function() {
    document.getElementById("giftButton").innerText = "Gift";
    document.getElementById("wishesButton").innerText = "Wishes";
  });
  
  document.getElementById("wishesButton").addEventListener("mouseout", function() {
    document.getElementById("giftButton").innerText = "Gift";
    document.getElementById("wishesButton").innerText = "Wishes";
  });
  
