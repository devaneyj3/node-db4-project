
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, instructions: 'Preheat Oven to 350'},
        { id: 2, instructions: 'Do hokey pokey'},
        { id: 3, instructions: 'Add Ingredients'}
      ]);
    });
};
