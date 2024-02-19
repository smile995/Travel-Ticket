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
const token = document.getElementById('getToken')
token.addEventListener("click", function (e) {
  const grandTotal = buySeat * 550;
  const token = document.getElementById('copounCode').value;
  if (token == 'NEW15') {
    const discount = ( (grandTotal * 15 / 100));
    const mustPay = grandTotal - discount;
    setNewValue('grandTotal',mustPay)
    setNewValue('totalDiscount',discount)
   

    console.log( grandTotal, discount);
  }

})





// seat  value through the id and new value
function setNewValue(id, value) {
  document.getElementById(id, value).innerText = value;

}