function showFact(){

    let facts = [

        "🍖 Luffy loves meat more than anything!",

        "💪 He can stretch because of his Devil Fruit.",

        "🏴‍☠️ His dream is to become the Pirate King.",

        "❤️ He values friendship more than treasure.",

        "😂 Luffy often gets lost in serious situations."

    ];

    let random = Math.floor(Math.random()*facts.length);

    document.getElementById("fact").innerHTML = facts[random];

}

function toggleDetails(){

    let details = document.getElementById("details");

    if(details.style.display==="none"){

        details.style.display="block";

    }

    else{

        details.style.display="none";

    }

}
