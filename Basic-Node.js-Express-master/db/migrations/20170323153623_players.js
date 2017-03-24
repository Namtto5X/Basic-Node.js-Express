
exports.up = function(knex, Promise) {
    return knex.schema.createTable('players', function(table){
        table.increments();
        table.string('firstname').notNullable().unique();
        table.string('lastname').notNullable();
        table.string('club').notNullable();

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('players');
};
