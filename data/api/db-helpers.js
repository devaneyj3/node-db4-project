
const db = require('../db-config');

module.exports = {
    getRecipes,
    getShoppingList,
}

//GET recipes

function getRecipes() {
    return db('recipes')
}

// GET ingrendeints for a recipe

function getShoppingList(recipe_id) {
    // return select name, quantity, r.name
    // from ingredients as i
    // join recipes as r
    // join[recipes - ingredients] as ri
    // on ri.recipes_id = r.id
    // and i.id = ri.ingredients_id

    return  db('ingredients as i')
        .join('recipes as r', 'r.id','ri.recipes_id')
        .join('recipes-ingredients as ri', 'i.id', 'ri.ingredients_id')
        .where('r.id', recipe_id)
        .select('i.name', 'i.quantity')
} 
