
let invWater = 10000;
let invMilk = 10000;

window.onload = function(){

    // document.getElementById("inv-submit").onclick = function(){
    //     let invWater = document.getElementById("inv-water").value;
    //     console.log(`Water in inventory: ${invWater}`)
    // }

    document.getElementById("submit").onclick = function(){
        let coffee = document.getElementById("coffee-select").value;
        let amount = document.getElementById("amount").value;
        console.log(coffee);
        console.log(amount);
        let coffeeResults = calculateTotalResources(coffee, amount);

        document.getElementById("total-milk").textContent = coffeeResults.totalMilk;
        document.getElementById("total-coffees").textContent = coffeeResults.numberOfCoffees;
        document.getElementById("coffee-type").textContent = coffeeResults.coffeeType;
        document.getElementById("total-coffee-grams").textContent = coffeeResults.totalCoffeeGrams;
        document.getElementById("total-machine-water").textContent = coffeeResults.totalMachineWater;
        document.getElementById("total-coffee-water").textContent = coffeeResults.water;
        document.getElementById("total-water").textContent = coffeeResults.totalWater;

        console.log(`Total Milk is ${coffeeResults.totalMilk}ml for ${coffeeResults.numberOfCoffees} ${coffeeResults.coffeeType}s`)
        console.log(`Total Coffee Grams is ${coffeeResults.totalCoffeeGrams}g`)
        console.log(`Total Machine Water is ${coffeeResults.totalMachineWater}ml`)
        console.log(`Total Coffee Water is ${coffeeResults.water}ml`)
        console.log(`Total Water is ${coffeeResults.totalWater}ml`)
        console.log("-----");

        let leftResources = calculateLeftResources(coffeeResults.totalWater, coffeeResults.totalMilk)

        document.getElementById("water-left").textContent = leftResources.invWater;
        document.getElementById("milk-left").textContent = leftResources.invMilk;

        console.log(`${leftResources.invWater}ml of Water left.`);
        console.log(`${leftResources.invMilk}ml of Milk left.`);
    }
}

function calculateTotalResources(cup, numberOfCoffees){
    
    const coffeeGrams = 18;
    const machineWater = 100;
    let milk;
    let water;

    if (cup === "americano"){
        milk = 0;
        water = 250;   
    }

    else if (cup === "capuchino"){
        milk = 250;
        water = 0;
    }

    else{
        throw new Error("Coffee type invalid")
    }

    return{
        totalMilk : milk * numberOfCoffees,
        water : water * numberOfCoffees,
        totalCoffeeGrams : coffeeGrams * numberOfCoffees,
        totalMachineWater : machineWater * numberOfCoffees,
        totalWater : (water + machineWater) * numberOfCoffees,
        coffeeType : cup,
        numberOfCoffees
    }

}

function calculateLeftResources(water, milk){

    invWater -= water;
    invMilk -= milk;

    return{
        invWater,
        invMilk
    }
}

/*

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