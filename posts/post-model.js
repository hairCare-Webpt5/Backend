const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    
}

function find(){
    return db('posts')
    .select('id','title','description', 'image','userId')
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

