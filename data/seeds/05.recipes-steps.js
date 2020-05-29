
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes-steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes-steps').insert([
        {recipe_id: 1, step_id: 1},
        {recipe_id: 1, step_id: 2},
        {recipe_id: 1, step_id: 3},
        {recipe_id: 2, step_id: 1},
        {recipe_id: 2, step_id: 3},
      ]);
    });
};
