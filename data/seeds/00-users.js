const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'firstUser', password: bcrypt.hashSync('unbreakable',10),location: 'Washington, DC', phone: 123458698, roleId: 1},
        {username: 'testUser', password: bcrypt.hashSync('unbreakable',10),location: 'Dallas, TX', phone: 123458698, roleId: 2},
        {username: 'adminUser', password: bcrypt.hashSync('unbreakable',10),location: 'Alexandria, VA', phone: 123458698, roleId: 1},
        {username: 'stylistUser', password: bcrypt.hashSync('unbreakable',10),location: 'Washington, DC', phone: 123458698, roleId: 2},
      ]);
    });
};
