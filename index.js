const express = require('express');

const server = express(); 

const recipeRoutes = require('./data/api/RecipeRoutes/RecipeRoutes');

server.use(express.json());
server.use('/api', recipeRoutes)


server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})