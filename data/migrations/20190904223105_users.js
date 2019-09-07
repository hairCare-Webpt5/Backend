
exports.up = function(knex) {
  return knex.schema.createTable('roles', role => {
      role.increments();
      role.string('role').notNullable();
  })

  .createTable('users', user => {
      user.increments();
      user.string('username', 255).notNullable().unique();
      user.string('password', 255).notNullable();
      user.string('location', 255).notNullable();
      user.integer('phone');
      user.integer('roleId').references('id').inTable('roles');
  })

  .createTable('posts', post => {
      post.increments();
      post.string('title', 255).notNullable();
      post.string('description').notNullable();
      post.string('image').notNullable();
      post.integer('userId').references('id').inTable('users');
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
                     .dropTableIfExists('users')
                    .dropTableIfExists('roles')
};
