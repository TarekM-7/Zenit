let coffeeGrams = 17;
let americanoWater = 250;
let machineWater = 60;
let capuchinos;
let total;

let cup = "";
let amount;

if (cup == "americano"){
    let water = 250;
    let coffeeGrams = 17;
}

if (cup == "capuchino"){
    let milk = 250;
    let coffeeGrams = 17;
}

function calculateResources(numberOfCoffees){
    const totalGrams = numberOfCoffees * coffeeGrams;
    americanoWater = numberOfCoffees * americanoWater;
    machineWater = numberOfCoffees * machineWater;
    const totalWater = machineWater + americanoWater;

    return{
        americanoWater: americanoWater,
        machineWater: machineWater,
        number: numberOfCoffees,
        coffe: totalGrams,
        water: totalWater
    };
}

const result = calculateResources(12);

console.log(`For ${result.number} americano Coffees we need a total of:`);
console.log(`${result.coffe}g of coffee`);
console.log(`${result.machineWater}ml of water from the machine`);
console.log(`${result.americanoWater}ml of americano water`);
console.log(`${result.water}ml of total water`);

function calculateTotalCoffes(availableGrams, availableWater){
    const totalCoffes = availableGrams/coffeeGrams;

    return{
        grams: availableGrams,
        coffes: totalCoffes
    };
}

let coffeResult = calculateTotalCoffes(1000,0);

console.log(`With ${coffeResult.grams}g of coffee, you can make a total of ${coffeResult.coffes.toFixed(2)} coffees.`);