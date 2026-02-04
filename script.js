let runs = 0;
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

function reduceRun() {
    if (runs > 0) {
        runs--;
        updateScore();
    }
}

function reduceball() {
    if (balls > 0) {
        balls--;
        updateScore();
    }
}


let resetClicks = 0;
let resetTimeout;

function resetMatch() {
    resetClicks++;
    const btn = document.querySelector('.reset');
    
    if (resetClicks >= 5) {
        runs = 0;
        wickets = 0;
        balls = 0;
        updateScore();
        resetClicks = 0;
        btn.innerText = "Reset Match";
        btn.classList.remove('active');
    } else {
        btn.innerText = `Tap ${5 - resetClicks} more times to reset`;
        btn.classList.add('active');
        
        // Reset counter if inactive for 2 seconds
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
            resetClicks = 0;
            btn.innerText = "Reset Match";
            btn.classList.remove('active');
        }, 2000);
    }
}

function updateScore() {
    document.getElementById("runs").innerText = runs;
    document.getElementById("wickets").innerText = wickets;

    let overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("overs").innerText = overs;
}

/* ðŸ“± Extra: prevent double-tap zoom on mobile */
document.addEventListener("touchstart", function () {}, true);
