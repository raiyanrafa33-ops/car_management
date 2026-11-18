let isSignedIn = false;
let anonImg = "Guest.jpg";
let userImg = "User_Icon.png";

// Show or hide cue card when clicking profile avatar
function toggleCueCard(event) {

    // Prevent document click from immediately closing the card
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
// Update the interface based on login status
function setAuth(signedIn) {

    isSignedIn = signedIn;
    let avatar = document.getElementById("navAvatar");
    let guestContent = document.getElementById("guestContent");
    let userContent = document.getElementById("userContent");
    let toggleBtn = document.getElementById("toggleBtn");

    if (isSignedIn === true) {
        avatar.src = userImg;
        guestContent.style.display = "none";
        userContent.style.display = "block";
        toggleBtn.innerHTML = "State: User";
    } else {
        avatar.src = anonImg;
        guestContent.style.display = "block";
        userContent.style.display = "none";
        toggleBtn.innerHTML = "State: Guest";
    }
}
// Toggle button to test between Guest and User
function toggleState() {
    if (isSignedIn === true) {
        setAuth(false);
    } else {
        setAuth(true);
    }
}
// Sign out button inside cue card
function logoutUser() {
    setAuth(false);
    let cueCard = document.getElementById("cueCard");
    cueCard.style.display = "none";
}
// Connect click events
document.getElementById("navAvatar").onclick = toggleCueCard;
document.onclick = closeCueCard;
document.getElementById("toggleBtn").onclick = toggleState;
document.getElementById("logoutBtn").onclick = logoutUser;