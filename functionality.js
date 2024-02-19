// Redirect functionality when someone click on the button

document.getElementById("redirectButton").addEventListener("click", function () {
  document.getElementById('content').scrollIntoView({
    behavior: 'smooth'
  })

})


// get all the button through the parent
const btnCollection = document.getElementsByClassName('click-btn');
for (const btn of btnCollection) {

  btn.addEventListener("click", function (e) {
    btn.classList.add('bg-green-600', 'cursor-not-allowed');
    const seatNumber = getValue('totalSeat')
    const seatRemaining= seatNumber-1;
  })
}


// get the value by id
function getValue(id) {
  const total = document.getElementById(id).innerHTML;
  const intTotal = parseInt(total)
  return intTotal
}

// seat  value through the id and new value
function setNewValue (id,value){

}