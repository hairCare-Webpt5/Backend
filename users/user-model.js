const db = require('../data/dbConfig');

module.exports = {
    add,
    findByRole,
    findById,
}

function add(user){
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findByRole(role){
    return db('users').where({role})
}

function findById(id){
    return db('users')
            .where({id})
            .first(id);
}