const express = require('express');
const router = express.Router();
const { sentence } = require('../models/sentence.model');

/* SENTENCE ROUTES */
router.get('/', (req,res) => {
    Sentence.find({}).then((sentences) => {
        res.status(200).json({
            sentences
        });
    });
})

router.post('/', (req,res) => {
    let text = req.body.text;

    newsentence = new sentence({
        text
    })

    newsentence.save().then((sentenceDoc) =>{
        res.status(201).json({
            message: "Sentence Added Successfully",
            sentenceDoc
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
        error: err
        });
    });
});


module.exports = router;