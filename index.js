let homeScore = 0
let guestScore = 0

function addHome(num){
    homeScore += num
    render()
}

function addGuest(num){
    guestScore += num
    render()
}

function render(){
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    render()
}