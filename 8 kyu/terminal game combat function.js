// Create a combat function that takes the player's current health and the amount of damage received, 
// and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    let xp = health - damage;
    if (xp > 0) {
      return xp
    } else {
      return xp = 0
    }
}