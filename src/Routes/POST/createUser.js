const express = require('express');
const router = express.Router();
const db = require('../../Config/MySQL/db.js');

router.post('/create_user', (req, res) => {
    db.execute('INSERT INTO accounts (email, password) VALUES (?, ?)',
        ['wha444444tever@gmail.com', 'wat345'],
        (err, results) => {
            console.log(results);
            if(err){
                res.status(500).send(`Error has occurred: ${err.message}`);
                return;
            }
            res.status(200).send('Created user successfully');
        }
    )
})


module.exports = router;