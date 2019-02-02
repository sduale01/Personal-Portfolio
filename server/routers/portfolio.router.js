const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "tags" JOIN "projects" ON "projects"."tag_id" = "tags"."id";`
    pool.query(queryText).then(response => {
        res.send(response.rows);
        // console.log(response.rows);
        
    }).catch(error =>{
        console.log('error in GET ', error);
        res.sendStatus(500);
    });
});


module.exports = router;