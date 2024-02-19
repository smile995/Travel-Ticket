// Redirect functionality when someone click on the button

document.getElementById("redirectButton").addEventListener("click", function() {
  document.getElementById('content').scrollIntoView({ 
    behavior: 'smooth' 
  })

})


// get all the button through the parent
const btnParent = document.getElementsByClassName('btn-container');
console.log(btnParent);
