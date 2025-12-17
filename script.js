let coffeeGrams = 20;
let americanoWater = 250;
let machineWater = 60;
let capuchinos;
let total;

let cup = "";
let amount;

function calculateTotalResources(cup, numberOfCoffees){

    if (cup === "americano"){
        let water = 250;
        let coffeeGrams = 18;
        let machineWater = 30;

        return{
        water : water * numberOfCoffees,
        totalCoffeeGrams : coffeeGrams * numberOfCoffees,
        totalMachineWater : machineWater * numberOfCoffees,
        totalWater : water + (machineWater * numberOfCoffees)
        }
    }

    else if (cup === "capuchino"){
        let milk = 250;
        let coffeeGrams = 18;
        let machineWater = 30;

        return{
        totalMilk : milk * numberOfCoffees,
        totalCoffeeGrams : coffeeGrams * numberOfCoffees,
        totalMachineWater : machineWater * numberOfCoffees
        }
    }

    else{
        throw new Error("Coffee type invalid")
    }

}

let capuchinoResults = calculateTotalResources("capuchino", 2);

console.log(`Total Milk is ${capuchinoResults.totalMilk}ml`)
console.log(`Total Coffee Grams is ${capuchinoResults.totalCoffeeGrams}g`)
console.log(`Total Machine Water is ${capuchinoResults.totalMachineWater}ml`)

let americanoResults = calculateTotalResources("americano", 2);

console.log(`Total water is ${americanoResults.water}ml`)
console.log(`Total Coffee Grams is ${americanoResults.totalCoffeeGrams}g`)
console.log(`Total Machine Water is ${americanoResults.totalMachineWater}ml`)
console.log(`Total Water is ${americanoResults.totalWater}ml`)

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