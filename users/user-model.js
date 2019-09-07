const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findById,
    findStylist,
};

function add(user){
    const [id] = await db('users').insert(user);
    return findById(id);
};

function find(){
    return db('users')
        .select('id','username','location');            
 };

function findById(id){
    return db('users')
            .where({id})
            .first(id);
};

function findStylist(role){
        return db('users')
            .select('username', 'location', 'phone')
            .where('roleId', role);
}