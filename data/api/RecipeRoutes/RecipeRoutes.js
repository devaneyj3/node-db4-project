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

module.exports = router;

