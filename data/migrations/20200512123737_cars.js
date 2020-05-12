exports.up = function (knex, Promise) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("vin", 17).unique().notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmissionType");
    tbl.string("title");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
