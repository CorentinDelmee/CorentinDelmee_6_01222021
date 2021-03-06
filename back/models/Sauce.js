// Appel du module mongoose

const mongoose = require("mongoose");

// Appel de Validator

const validator = require("validator");

// Création d'un schema d'objet

const saucesSchema = mongoose.Schema({
    userId: { type: String , required: true},
    name: { 
        type: String, 
        required: true,
        minLenght: 5,
        maxLenght: 30,
        validate : {
            validator: function(value) {
                return /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/.test(value);
            },
            message: "Veuillez n'utilisez que des lettres et des chiffres, svp"
        }
    },
    manufacturer: { 
        type: String, 
        required: true, 
        minLenght: 5,
        maxLenght: 30,
        validate : {
            validator: function(value) {
                return /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/.test(value);
            },
            message: "Veuillez n'utilisez que des lettres et des chiffres, svp"
        }
    },
    description: { 
        type: String, 
        required: true,
        maxLenght: 300,
        validate : {
            validator: function(value) {
                return /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/.test(value);
            },
            message: "Veuillez n'utilisez que des lettres et des chiffres, svp"
        }
    },
    mainPepper: { 
        type: String, 
        required: true,
        maxLenght: 30,
        validate : {
            validator: function(value) {
                return /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/.test(value);
            },
            message: "Veuillez n'utilisez que des lettres et des chiffres, svp"
        }
    },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    usersDisliked: { type: [String], required: true },

})

// Export du schema d'objet Things pour app.js

module.exports = mongoose.model("Thing", saucesSchema);