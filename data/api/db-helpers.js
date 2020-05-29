
const db = require('../db-config');

module.exports = {
    getRecipes
}

//GET recipes

function getRecipes() {
    return db('recipes')
}
