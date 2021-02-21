vote = 0;
ballot_box_multiplier = 1;


president_list = ["sarko", "hollande", "jfk", "trump", "obama", "bidden"]

function update() {
    for (let i = 0; i < president_list.length; i++) {
        vote += parseInt(document.querySelector("span#cumul-" + String(i)).textContent)
    }
    document.getElementById('vote-number').innerHTML = "Vote : " + vote
}


function add_vote() {
    vote += ballot_box_multiplier;
    document.getElementById('vote-number').innerHTML = "Vote : " + vote
}



function president_upgrade(president_id) {
    
    if (vote >= parseInt(document.querySelector("span#cost-" + String(president_id)).innerHTML)) {
        document.querySelector("span#lvl-" + String(president_id)).innerHTML = parseInt(document.querySelector("span#lvl-" + String(president_id)).innerHTML) + 1
        document.querySelector("span#cost-" + String(president_id)).innerHTML = Math.round((parseInt(document.querySelector("span#cost-" + String(president_id)).innerHTML) * 1.05 ** (parseInt(document.querySelector("span#lvl-" + String(president_id)).innerHTML) / 4)))
        document.querySelector("span#cumul-" + String(president_id)).innerHTML = parseInt(document.querySelector("span#lvl-" + String(president_id)).innerHTML) * document.querySelector("span#vote-" + String(president_id)).innerHTML
    }
}

function increase_multiplier() {
    n = 1
    if (vote >= 10000 * n) {
        ballot_box_multiplier++;
        document.getElementById("ballot-box-multiplier").innerHTML = ballot_box_multiplier
    }
    n++;
}

setInterval(update, 1000);