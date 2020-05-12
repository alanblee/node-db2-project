exports.up = function (knex, Promise) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.decimal("mileage").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
