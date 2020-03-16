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
const getSkills = (request, response) =>{
    pool.query('select array_to_json(array(select row_to_json(n)from skillset ssleft join lateral (select ss.skill_name, array(select skill_summary from skill where skillset_id = ss.skillset_id) as skills) n on true))', (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
        console.log(response);
    })
}

module.exports = {
    getBlogPosts,
    getSkills
}