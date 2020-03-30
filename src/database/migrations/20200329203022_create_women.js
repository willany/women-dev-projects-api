exports.up = function(knex) {
  return knex.schema.createTable("women", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.string("linkedin");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("women");
};
