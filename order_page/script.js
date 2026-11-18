// Show or hide cue card on avatar click
function toggleCueCard(event) {
    event.stopPropagation();
    let cueCard = document.getElementById("cueCard");
    if (cueCard.style.display === "block") {
        cueCard.style.display = "none";
    } else {
        cueCard.style.display = "block";
    }
}
// Hide cue card when clicking anywhere outside
function closeCueCard() {
    let cueCard = document.getElementById("cueCard");
    cueCard.style.display = "none";
}
// Logout action - redirect to login page
function logoutUser() {
    window.location.href = "../login/login.html";
}
// Update fixed original car price
function updatePrice() {
    let price = parseInt(document.getElementById("carSelect").value);
    document.getElementById("carPrice").value = "$" + price.toLocaleString();
}
// Submit purchase order handler
function placeOrder(event) {
    event.preventDefault();
    let carSelect = document.getElementById("carSelect");
    let carName = carSelect.options[carSelect.selectedIndex].text;
    let price = document.getElementById("carPrice").value;
    let message = document.getElementById("orderMessage");
    message.innerHTML = "<b>Purchase Successful!</b><br>Vehicle: " + carName + "<br>Price: " + price + "<br>Status: Confirmed";
    message.style.color = "green";
    return false;
}
// Connect click events
document.getElementById("navAvatar").onclick = toggleCueCard;
document.onclick = closeCueCard;
document.getElementById("logoutBtn").onclick = logoutUser;