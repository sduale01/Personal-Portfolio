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

router.post('/', (req,res) => {
    console.log('req.body is:', req.body);
    
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
    VALUES ($1,$2,$3,$4,$5,$6,$7)`
    const queryValues = [
        req.body.name,
        req.body.description,
        req.body.thumbnail,
        req.body.website,
        req.body.github,
        req.body.date_completed,
        req.body.tag_id
    ]
    pool.query(queryText, queryValues).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in POST', error);
        res.sendStatus(500);
    });
})

module.exports = router;