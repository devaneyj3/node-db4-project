
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Butter', quantity: '1 Stick'},
        { id: 2, name: 'Cheese', quantity: '1 Cup' },
        { id: 3, name: 'Chocolate', quantity: '6 Cups' }
      ]);
    });
};
