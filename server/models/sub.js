const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const subSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            require: "Name is required",
            minLength: [2,'Too short'],
            maxLength: [32, 'To long']
        },
        slug:{
            type: String,
            unique: true,
            lowercase: true,
            index: true
        },
    parent: { type:ObjectId, ref: "category", required:true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Subs', subSchema)