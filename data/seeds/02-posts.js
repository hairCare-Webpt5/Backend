
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'MoHawk', description: 'beautiful', image: 'mohawk', userId: 1},
        { id: 2, title: 'Buzz Cut', description: 'clean cut', image: 'Buzz', userId: 1}, 
        { id: 3, title: 'Combover', description: 'buisness approved', image: 'sweet', userId: 3},
        { id: 4, title: 'Highlights', description: 'edgy', image: 'test', userId: 1},
        { id: 5, title: 'Puff', description: 'throwback', image: 'throwback', userId: 3},
        { id: 6, title: 'Beard trim', description: 'stay clean', image: '', userId: 1},
        { id: 7, title: 'Spikes', description: 'punk', image: 'punk rock', userId: 3},
      ]);
    });
};
