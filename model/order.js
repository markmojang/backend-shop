const mongoose = require("mongoose");
const productShema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    cart : {
        type: String
    },
    total : {
        type: Number
    },
    
});

exports.Order = mongoose.model("order", productShema)
