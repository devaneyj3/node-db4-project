
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.text('name')
            .notNullable()
            .unique()
    })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.text('name')
            tbl.float('quantity')
        })
        .createTable('recipes-ingredients', tbl => {
            tbl.integer('recipes_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
            tbl.integer('ingredients_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
            // the combination of the two keys becomes our primary key
            // will enforce unique combinations of ids
            tbl.primary(['recipes_id', 'ingredients_id']);

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes-ingredients')
        .dropTableIfExists('ingrdients')
        .dropTableIfExists('recipes');
};
