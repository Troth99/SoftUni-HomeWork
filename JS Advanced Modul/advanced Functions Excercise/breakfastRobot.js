function solution() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function(command) {
        const tokens = command.split(' ');

        if (tokens[0] === 'restock') {
            const element = tokens[1];
            const quantity = Number(tokens[2]);
            ingredients[element] += quantity;
            return 'Success';
        }

        if (tokens[0] === 'prepare') {
            const recipe = tokens[1];
            const quantity = Number(tokens[2]);
            const recipeIngredients = recipes[recipe];

            for (let ingredient in recipeIngredients) {
                if (ingredients[ingredient] < recipeIngredients[ingredient] * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            for (let ingredient in recipeIngredients) {
                ingredients[ingredient] -= recipeIngredients[ingredient] * quantity;
            }

            return 'Success';
        }

        if (tokens[0] === 'report') {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
