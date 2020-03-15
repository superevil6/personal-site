const Pool = require('pg').Pool;
const dotenv = require('dotenv').config( {path: '/var/www/env/prod.env'} );

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const getBlogPosts = (request, response) =>{
    pool.query('SELECT * FROM public.blog order by blog_id desc', (error, results)=>{
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

module.exports = {
    getBlogPosts
}