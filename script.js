const submitBtn = document.getElementById("submit");
const invsubmitBtn = document.getElementById("inv_submit");




if (invsubmitBtn){
    invsubmitBtn.onclick = function(){

        const invWater = Number(document.getElementById("inv_water").value);
        const invMilk = Number(document.getElementById("inv_milk").value);

        localStorage.setItem("invWater", invWater);
        localStorage.setItem("invMilk", invMilk);

        console.log(`Inventory Saved`);

    }
}

if (submitBtn){
    submitBtn.onclick = function(){

        const coffee = document.getElementById("coffee-select").value;
        const amount = Number(document.getElementById("amount").value);

        console.log(coffee);
        console.log(amount);

        const coffeeResults = calculateTotalResources(coffee, amount);

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

        document.getElementById("water-left").textContent = leftResources.newInvWater;
        document.getElementById("milk-left").textContent = leftResources.newInvMilk;

        console.log(`${leftResources.newInvMilk}ml of Milk left.`);
        console.log(`${leftResources.newInvWater}ml of Water left.`);
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

    const invWater = Number(localStorage.getItem("invWater")) || 0;
    const invMilk = Number(localStorage.getItem("invMilk")) || 0;

    const newInvWater = invWater - water;
    const newInvMilk = invMilk - milk;

    localStorage.setItem("invWater", newInvWater);
    localStorage.setItem("invMilk", newInvMilk);

    return{
        newInvWater,
        newInvMilk
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