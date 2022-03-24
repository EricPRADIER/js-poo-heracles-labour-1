import Fighter from "./src/Fighter.js";
import MAX_LIFE from "./src/Fighter.js";

// First Labour : Heracles vs Nemean Lion
// use your Figher class here

  const fighter1 = new Fighter("Heracles", 20, 6, 100);
  const fighter2 = new Fighter("Lion", 11, 13, 100);

  for (let i=0; i<500; i++) {
    console.log("Tour " +i);
    console.log(fighter1.attack(fighter2));
    if (fighter2.life===0) {
        console.log(fighter1.name + " a gagné.");  
        break;
    } else {
        console.log(fighter2.attack(fighter1));
        if (fighter1.life===0) {
            console.log(fighter2.name + " a gagné.");  
            break;
        } 
    }
  }



