const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByRole,

}

function find(){
    return db('post').select('id','title','description', 'user-id')
}

function findBy(filter){
    return db('post').where(filter);
}

function findById(stylistId){
    return db('post')
    .where('userId',stylistId)
    .first();
}

function add(post){
   // const [id] = await db('post').insert(post);
    return db('posts')
            .insert(post)
}

function findByRole(role){
    return db('users').where('role', role)
}

