// Redirect functionality when someone click on the button

document.getElementById("redirectButton").addEventListener("click", function () {
  document.getElementById('content').scrollIntoView({
    behavior: 'smooth'
  })

})


// get all the button through the parent
const btnCollection = document.getElementsByClassName('click-btn');
let seat = 20;
let buySeat = 0;
for (const btn of btnCollection) {
  btn.addEventListener("click", function (e) {
    seat = seat - 1;
    buySeat = buySeat + 1;
    const totalTaka = buySeat * 550;

    if (buySeat > 4) {
      alert('You Can not buy more than 4 ticket')
    }

    setNewValue('totalSeat', seat)
    setNewValue('buySeat', buySeat)
    setNewValue('totalPayment', totalTaka)

    btn.classList.add('bg-green-600', 'pointer-events-none', 'cursor-not-allowed');
  })


}




// get the value by id
function getValue(id) {
  const copoun = document.getElementById(id).value;
  copoun.reset();

  return copoun
}

// seat  value through the id and new value
function setNewValue(id, value) {
  document.getElementById(id, value).innerText = value;

}