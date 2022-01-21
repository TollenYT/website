const mongoose = require("mongoose");

// model for Categories
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema)