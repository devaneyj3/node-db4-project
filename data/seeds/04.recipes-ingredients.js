
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes-ingredients').insert([
        { recipe_id: 2, ingredient_id: 2},
        {recipe_id: 2, ingredient_id: 1},
        {recipe_id: 1, ingredient_id: 2}
      ]);
    });
};
