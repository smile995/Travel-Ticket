// Redirect functionality when someone click on the button

document.getElementById("redirectButton").addEventListener("click", function() {
  document.getElementById('content').scrollIntoView({ 
    behavior: 'smooth' 
  })

})
