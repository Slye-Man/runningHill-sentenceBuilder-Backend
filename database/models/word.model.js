const mysql = require('mysql')

const wordSchema = new mysql.WordSchema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        trim: true
    },
    type: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    }
})

const word = mysql.model('Word', wordSchema);

module.exports = { word };