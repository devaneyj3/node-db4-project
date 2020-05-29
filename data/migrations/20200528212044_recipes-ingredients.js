
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
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.text('instructions')
        })
        .createTable('recipes-ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
            tbl.integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
            tbl.primary(['recipe_id', 'ingredient_id']);
        })
        .createTable('recipes-steps', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
            tbl.integer('step_id')
                .unsigned()
                .references('id')
                .inTable('steps')
            tbl.primary(['recipe_id', 'step_id']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes-steps')
        .dropTableIfExists('recipes-ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingrdients')
        .dropTableIfExists('recipes');
};
