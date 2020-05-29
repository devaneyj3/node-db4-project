const express = require('express')

const db = require('../db-helpers');

const error = require('./middleware')

const router = express.Router();

//GET all recipes endpoint

router.get('/recipes', async(req, res) => {
    const recipes = await db.getRecipes()
    try {
        res.status(200).send(recipes)
    } catch (error) {
        error.dbError()
    }
})

router.get('/recipes/:id/shoppingList', async(req, res) => {
    const { id } = req.params;
    const shoppingList = await db.getShoppingList(id);
    try {
        res.status(200).send(shoppingList)
        
    } catch (error) {
        error.dbError()
    }
}) 

router.get('/recipes/:id/instructions', async(req, res) => {
    const { id } = req.params;
    const instructions = await db.getInstructions(id);
    console.log(instructions)
    try {
        res.status(200).send(instructions)

    } catch (error) {
        error.dbError()
    }
})

module.exports = router;

