/* ===== Desktop + Common Styles ===== */let runs = 0;
let wickets = 0;
let balls = 0;

function addRun(value) {
    runs += value;
    balls++;
    updateScore();
}

function addWicket() {
    if (wickets < 10) {
        wickets++;
        balls++;
        updateScore();
    }
}

function reduceWicket() {
    if (wickets > 0) {
        wickets--;
        updateScore();
    }
}

function resetMatch() {
    runs = 0;
    wickets = 0;
    balls = 0;
    updateScore();
}

function updateScore() {
    document.getElementById("runs").innerText = runs;
    document.getElementById("wickets").innerText = wickets;

    let overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("overs").innerText = overs;
}

/* 📱 Extra: prevent double-tap zoom on mobile */
document.addEventListener("touchstart", function () {}, true);


