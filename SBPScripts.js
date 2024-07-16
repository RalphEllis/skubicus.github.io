// This javascript contains two spaceship objects, although currently they have no connection or relevence to the HTML above. It also has a function for firing cannons, although it doesn't effect HP values yet. Finally, it has scripts which hide / display various parts of the html when the 'next' buttons are pressed.

// This makes cannons fire. It's used in shipname.decknumber.fireAtWill
const cannonDamage = function(shipName, deckNumber, deckType, targetShip) {
let damageRoll = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
console.log(shipName + " fired its " + deckNumber + " " + deckType + " and did " + damageRoll + " damage to " + targetShip + "!");
return damageRoll;}

// This defines the player ship and its stats
let playerShip = {
// ship core stats
shipName : 'The Return of Lenin',
shipClass : 'Cruiser',
shipSide : 'Ally',
shipHullPoints : '5000',
shipMaxHullPoints : '5000',
shipHullPointPercentage : function() {return (this.shipHullPoints / this.shipMaxHullPoints) * 100;},
shipFormationPosition : 'Vanguard',
hasCommander : true,
shipSize : 4,

// deck one stats
    deck1: {
        deck1Name: 'deck one',
        deck1Type: 'cannons',
        deck1MaxHullPoints: 750,
        deck1HullPoints: 750,
        deck1HullPointsPercentage: function() {
            return (this.deck1HullPoints / this.deck1MaxHullPoints) * 100;},
        fireAtWill: function() {
            return cannonDamage(playerShip.shipName, this.deck1Name, this.deck1Type, enemyShip.shipName);}
    },

    // deck two stats
    deck2: {
        deck2Name: 'deck two',
        deck2Type: 'torpedoes',
        deck2MaxHullPoints: 500,
        deck2HullPoints: 500,
        deck2HullPointsPercentage: function() {
            return (this.deck2HullPoints / this.deck2MaxHullPoints) * 100;},
        fireAtWill: function() {
            return cannonDamage(playerShip.shipName, this.deck2Name, this.deck2Type, enemyShip.shipName);}
    },

    // deck three stats
    deck3: {
        deck3Name: 'deck three',
        deck3Type: 'defence guns',
        deck3MaxHullPoints: 1000,
        deck3HullPoints: 1000,
        deck3HullPointsPercentage: function() {
            return (this.deck3HullPoints / this.deck3MaxHullPoints) * 100;
        },
        fireAtWill: function() {
            return cannonDamage(playerShip.shipName, this.deck3Name, this.deck3Type, enemyShip.shipName);
        }
    },

    // deck four stats
    deck4: {
        deck4Name: 'deck four',
        deck4Type: 'missiles',
        deck4MaxHullPoints: 1000,
        deck4HullPoints: 1000,
        deck4HullPointsPercentage: function() {
            return (this.deck4HullPoints / this.deck4MaxHullPoints) * 100;
        },
        fireAtWill: function() {
            return cannonDamage(playerShip.shipName, this.deck4Name, this.deck4Type, enemyShip.shipName);
        }
    }
};

// This defines the enemy ship and its stats
let enemyShip = {
// ship core stats
shipName : 'The Late-Stage Capitalism',
shipClass : 'Destroyer',
shipSide : 'Enemy',
shipHullPoints : '2000',
shipMaxHullPoints : '2000',
shipHullPointPercentage : function() {return (this.shipHullPoints / this.shipMaxHullPoints) * 100;},
shipFormationPosition : 'Vanguard',
hasCommander : false,
shipSize : 2,

// deck one stats
    deck1: {
        deck1Name: 'deck one',
        deck1Type: 'cannons',
        deck1MaxHullPoints: 750,
        deck1HullPoints: 750,
        deck1HullPointsPercentage: function() {
            return (this.deck1HullPoints / this.deck1MaxHullPoints) * 100;},
        fireAtWill: function() {
        // below prints: "(this ship) shoots (this deck's) (weapons) and does (random cannon damage) to (target 				ship)!" It returns the damage number.
            return cannonDamage(enemyShip.shipName, this.deck1Name, this.deck1Type, playerShip.shipName);}
    },

    // deck two stats
    deck2: {
        deck2Name: 'deck two',
        deck2Type: 'torpedoes',
        deck2MaxHullPoints: 500,
        deck2HullPoints: 500,
        deck2HullPointsPercentage: function() {
            return (this.deck2HullPoints / this.deck2MaxHullPoints) * 100;},
        fireAtWill: function() {
            return cannonDamage(enemyShip.shipName, this.deck2Name, this.deck2Type, playerShip.shipName);}
    		},
   
};

let playerFireAtWill = function() {
playerShip.deck1.fireAtWill()
playerShip.deck2.fireAtWill()
playerShip.deck3.fireAtWill()
playerShip.deck4.fireAtWill()
}

playerFireAtWill()

let enemyFireAtWill = function() {
enemyShip.deck1.fireAtWill()
enemyShip.deck2.fireAtWill()
}

enemyFireAtWill()

// --------------------------------------------------------------------------------------------------


    // After pressing the button on the introduction screen, this hides the intro text and shows the newGameQuestions form. It also scrolls back up to the top of page.

document.getElementById('IntroductionFinishButton').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  
    // Hide the form and show the results
  document.getElementById('introduction').style.display = 'none';
  document.getElementById('newGameQuestions').style.display = 'block';
  
  // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls smoothly to the top of the page
  });




/* 
		This code collects deck weapon choices from the html, sends them back to the html,
    which puts the chosen results into a table. It then hides the deck weapon question form,
    and displays a table of the chosen results.

*/
document.getElementById('deckForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Collect user inputs
  const deck1 = document.getElementById('deck1SystemChoice').value;
  const deck2 = document.getElementById('deck2SystemChoice').value;
  const deck3 = document.getElementById('deck3SystemChoice').value;
  const deck4 = document.getElementById('deck4SystemChoice').value;

  // Display the results
  document.getElementById('resultDeck1').textContent = deck1;
  document.getElementById('resultDeck2').textContent = deck2;
  document.getElementById('resultDeck3').textContent = deck3;
  document.getElementById('resultDeck4').textContent = deck4;

  // Hide the form and show the results
  document.getElementById('deckForm').style.display = 'none';
  document.getElementById('results').style.display = 'block';
});