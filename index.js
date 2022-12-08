let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")
let homeScore = home.textContent
let guestScore = guest.textContent

function addOneHome(){
    homeScore = +homeScore + 1
    home.textContent = homeScore
}

function addTwoHome(){
    homeScore = +homeScore + 2
    home.textContent = homeScore
}

function addThreeHome(){
    homeScore = +homeScore + 3
    home.textContent = homeScore
}

function addOneGuest(){
    guestScore = +guestScore + 1
    guest.textContent = guestScore
}

function addTwoGuest(){
    guestScore = +guestScore + 2
    guest.textContent = guestScore
}

function addThreeGuest(){
    guestScore = +guestScore + 3
    guest.textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
}