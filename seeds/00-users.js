
exports.seed = function(knex) {
  
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'firstUser', password: 'password123',location: 'Washington, DC', phone: 123458698, roleId: 1},
        {id: 2, username: 'testUser', password: 'password12358',location: 'Dallas, TX', phone: 123458698, roleId: 2},
        {id: 3, username: 'adminUser', password: 'password1234569',location: 'Alexandria, VA', phone: 123458698, roleId: 1},
        {id: 4, username: 'stylistUser', password: 'password12389',location: 'Washington, DC', phone: 123458698, roleId: 2},
      ]);
    });
};
