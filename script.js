let coffeeGrams = 20;
let americanoWater = 250;
let machineWater = 60;
let capuchinos;
let total;


window.onload = function(){
    let coffee;
    let amount;

    document.getElementById("submit").onclick = function(){
    coffee = document.getElementById("coffee-select").value;
    amount = document.getElementById("amount").value;
    console.log(coffee);
    console.log(amount);
    let coffeeResults = calculateTotalResources(coffee, amount);

    console.log(`Total Milk is ${coffeeResults.totalMilk}ml for ${coffeeResults.numberOfCoffees} ${coffeeResults.coffeeType}s`)
    console.log(`Total Coffee Grams is ${coffeeResults.totalCoffeeGrams}g`)
    console.log(`Total Machine Water is ${coffeeResults.totalMachineWater}ml`)
    console.log(`Total Coffee Water is ${coffeeResults.water}ml`)
    console.log(`Total Water is ${coffeeResults.totalWater}ml`)
    console.log("-----");
    }
}

function calculateTotalResources(cup, numberOfCoffees){
    
    let coffeeGrams = 18;
    let machineWater = 100;


    if (cup === "americano"){
        let milk = 0;
        let water = 250;

        return{
        totalMilk : milk * numberOfCoffees,
        water : water * numberOfCoffees,
        totalCoffeeGrams : coffeeGrams * numberOfCoffees,
        totalMachineWater : machineWater * numberOfCoffees,
        totalWater : water + (machineWater * numberOfCoffees),
        coffeeType : cup,
        numberOfCoffees
    }
        
    }

    else if (cup === "capuchino"){
        let milk = 250;
        let water = 0;

        return{
        totalMilk : milk * numberOfCoffees,
        water : water * numberOfCoffees,
        totalCoffeeGrams : coffeeGrams * numberOfCoffees,
        totalMachineWater : machineWater * numberOfCoffees,
        totalWater : water + (machineWater * numberOfCoffees),
        coffeeType : cup,
        numberOfCoffees
    }

    }

    else{
        throw new Error("Coffee type invalid")
    }


}

/*
let capuchinoResults = calculateTotalResources("capuchino", 2);

console.log(`Total Milk is ${capuchinoResults.totalMilk}ml for ${capuchinoResults.numberOfCoffees} ${capuchinoResults.coffeeType}s`)
console.log(`Total Coffee Grams is ${capuchinoResults.totalCoffeeGrams}g`)
console.log(`Total Machine Water is ${capuchinoResults.totalMachineWater}ml`)

let americanoResults = calculateTotalResources("americano", 2);

console.log(`Total water is ${americanoResults.water}ml for ${americanoResults.numberOfCoffees} ${americanoResults.coffeeType}s`)
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
*/