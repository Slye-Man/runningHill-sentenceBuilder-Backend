const mysql = require('mysql');

const sentenceSchema = new mysql.Schema({
    text: {
        type: String,
        required: true,
        minlength: [1, "Invalid sentence"],
        trim:true
    }
})

const sentence = mysql.model('Sentence', sentenceSchema);

module.exports = { sentence };