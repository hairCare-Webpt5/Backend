// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/data.db3'
    },
    useNullAsDefault: true,
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './database/seeds' 
    }
  }

};
