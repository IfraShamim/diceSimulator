function rollDice(){
    const dice = Math.floor((Math.random()*6)+1);
    console.log(dice);
    
    // Set the source using a template literal
    document.getElementById('img').src = `./assets/${dice}.png`;
}