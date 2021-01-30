function ticketCategory(category, addition) {
  const numberOfTicket = getInputValue(category);
  let ticketAdded = numberOfTicket;
  if (addition == true) {
    ticketAdded = numberOfTicket + 1;
  }
  if (addition == false && ticketAdded > 0) {
    ticketAdded = numberOfTicket - 1;
  }
  document.getElementById(category + "-class").value = ticketAdded;
  calcTotal();
}

function calcTotal() {
  const firstClassPrice = getInputValue("first");
  const economyPrice = getInputValue("economy");

  const totalPrice = firstClassPrice * 150 + economyPrice * 100;
  document.getElementById("sub-total").innerText = "$" + totalPrice;

  const vat = totalPrice * 0.1;
  document.getElementById("vat").innerText = "$" + vat;

  const grandTotal = totalPrice + vat;
  document.getElementById("total").innerText = "$" + grandTotal;
}

function getInputValue(category) {
  const categoryInput = document.getElementById(category + "-class");
  const numberOfTickets = parseInt(categoryInput.value);
  return numberOfTickets;
}

const modal = document.getElementById("myModal");
const btn = document.querySelector(".btn-style");
const close = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
  document.getElementById("sub-total").innerText = 0;
  document.getElementById("vat").innerText = 0;
  document.getElementById("total").innerText = 0;
  document.getElementById("first-class").value = 0;
  document.getElementById("economy-class").value = 0;
});
