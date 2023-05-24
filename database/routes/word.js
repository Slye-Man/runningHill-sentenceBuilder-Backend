const express = require('express');
const router = express.Router();
const { word } = require('../models/word.model');

/* WORD ROUTES */
router.get('/', (req,res) => {
    word.find({}).then((words) => {
        res.status(200).json({
            words
        });
    });
})

router.get('/:type', (req, res) => {
    word.find({
        type: req.params.type
    }).then((words) => {
        res.status(200).json({
        words
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
        error: err
        });
    });
});

router.post('/', (req, res) => {
    let title = req.body.title;
    let type = req.body.type;

    newWord = new word({
        title, type
    })

    newWord.save().then((wordDoc) =>{
        res.status(201).json({
            message: "Word Added Successfully",
            wordDoc
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