// Redirect functionality when someone click on the button

document.getElementById("redirectButton").addEventListener("click", function() {
  // Smooth scrolling to the content section
  document.getElementById('content').scrollIntoView({ 
    behavior: 'smooth' 
  })

})
