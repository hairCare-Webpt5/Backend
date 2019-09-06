const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,

}

function find(){
    return db('post').select('id','title','description', 'user-id')
}

function findBy(filter){
    return db('post').where(filter);
}

function findById(id){
    return db('post')
    .where({id})
    .first();
}

function add(post){
   // const [id] = await db('post').insert(post);
    return findById(id);
}

