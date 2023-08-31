const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

    name : {
        type: String,
    },

    description : {
        type: String,
    },

    status : {
        type: String,
        enum: ['Not Started', 'In Progress', 'Conpleted'],
    }
})

module.exports = mongoose.model('Client', ClientSchema);