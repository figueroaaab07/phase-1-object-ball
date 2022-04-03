function gameObject() {
//    debugger;
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                },
            }
        },
    }
};
/* console.log(gameObject());
function homeTeamName() {
  return gameObject()['home']['teamName'];
};

console.log(homeTeamName());
// logs "Brooklyn Nets" */


function numPointsScored(playerName) {
    let player = {"points": 0};
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (key === playerName) {
                player["points"] = data[key]["points"];
            }
        }
    }
    return player["points"];
}

console.log(numPointsScored("Bismak Biyombo"));

function shoeSize(playerName) {
    let player = {"shoe": 0};
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (key === playerName) {
                player["shoe"] = data[key]["shoe"];
            }
        }
    }
    return player["shoe"];
}

console.log(shoeSize("DeSagna Diop"));

function teamColors(nameOfTeam) {
    let colorsOfTeam = [];
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj["teamName"] === nameOfTeam) {
            colorsOfTeam = Object.values(teamObj["colors"]);
        }
    }
    return colorsOfTeam;
}

console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    let nameOfTeams = [];
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj["teamName"]) {
            nameOfTeams.push(teamObj["teamName"]);
        }
    }
    return nameOfTeams;
}

console.log(teamNames());

function playerNumbers(nameOfTeam) {
    let jerseyNumbers = [];
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (teamObj["teamName"] === nameOfTeam) {
                jerseyNumbers.push(data[key]["number"]);
            }
        }
    }
    return jerseyNumbers;
}

console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    let player = {};
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (key === playerName) {
                player = {...data[key]};
            }
        }
    }
    return player;
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    let player = {"shoe": 0, "rebounds": 0};
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (player["shoe"] < data[key]["shoe"]) {
                player["shoe"] = data[key]["shoe"];
                player["rebounds"] = data[key]["rebounds"];
            } 
        }
    }
    return player["rebounds"];
}

console.log(bigShoeRebounds());

function mostPointsScored() {
    let player = {"points": 0, "name": ""};
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (player["points"] < data[key]["points"]) {
                player["points"] = data[key]["points"];
                player["name"] = key;
            } 
        }
    }
    return player["name"];
}

console.log(mostPointsScored());

function winningTeam() {
    let game = gameObject();
    let accum1 = 0;
    let accum2 = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (teamObj["teamName"] === "Brooklyn Nets") {
                accum1 += data[key]["points"];
            } else {
                accum2 += data[key]["points"];
            }
        }
    }
    return (accum1 > accum2) ? "Brooklyn Nets" : "Charlotte Hornets";
}

console.log(winningTeam());

function playerWithLongestName() {
    let game = gameObject();
    let player = {"length": 0, "name": ""};
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (player["length"] < key.length) {
                player["length"] = key.length;
                player["name"] = key;
            }
        }
    }
    return player["name"];
}

console.log(playerWithLongestName());

function doesLongNameStealATon() {
    let game = gameObject();
    let player1 = {"length": 0, "name": ""};
    let player2 = {"steals": 0, "name": ""};   
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj["players"];
        for (let key in data) {
            if (player1["length"] < key.length) {
                player1["length"] = key.length;
                player1["name"] = key;
            }
            if (player2["steals"] < data[key]["steals"]) {
                player2["steals"] = data[key]["steals"];
                player2["name"] = key;
            }

        }
    }
    return player1["name"] === player2["name"];
}

console.log(doesLongNameStealATon());
