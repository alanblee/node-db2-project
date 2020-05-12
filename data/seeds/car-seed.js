exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "1M8GDM9A_KP042788",
          make: "TESLA",
          model: "MODEL S",
          mileage: 1.2,
          transmissionType: "Automatic",
          title: "Clean",
        },
        {
          id: 2,
          vin: "3A2ASC0B_AP123412",
          make: "TESLA",
          model: "MODEL 3",
          mileage: 1232.2,
          transmissionType: "Automatic",
          title: "Clean",
        },
        {
          id: 3,
          vin: "2W1QFC0B_TY542791",
          make: "TESLA",
          model: "MODEL Y",
          mileage: 9.22,
          transmissionType: "Automatic",
          title: "Clean",
        },
      ]);
    });
};
