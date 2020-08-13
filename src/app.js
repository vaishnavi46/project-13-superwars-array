const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Instead of forloop use Map method    // Code here
    detailedPlayers = players.map(function (name, index) {
        var details = {
            name: players[index],
            strength: getRandomStrength(),
            img: "images/super-" + (index + 1) + ".png", 
        }
        if ((index + 1) % 2 == 0) 
        {
            details.type = "hero";
        } 
        else 
        {
            details.type = "villain";
        }
        return details;
    });
    //console.log(detailedPlayers);
    return detailedPlayers;
}
            
    // Instead of forloop use Map method
    // Code here

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
// Instead of using for loop
// Use chaining of Array methods - filter, map and join
// Type your code here
const buildPlayers = (players, type) => {
    let fragment = [];
    let filtered = [];
    let final=[];
    let finalstring='';
    fragment = players.map(function(item, index)
    {
        return item;
    }
    );
    filtered = fragment.filter(function (item,index)
    {
        return item.type==type;
    }
    );
    final=filtered.map(function(item,index)
    {
        finalstring=finalstring+'<div class="player"><img src='+item.img+'><div class="name">'+item.name+'</div><div class="strength">'+item.strength+'</div></div>';
        return item;
    })

    return finalstring;

}
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}