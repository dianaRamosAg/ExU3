const mongoose = require('mongoose');

let fanPageSchema = new mongoose.Schema({

        title:{
             type: String,
             required: true},

        description:{
                type: String,
                required: true},

        keyword:[{
                type: String,
                required: true,
            }],
        coments:[{
                type: String,
                required: true,
            }],
            
        calf:[{
                type: Number,
                required: true,
            }]
});
const fanPageModel = mongoose.model('FanPage', fanPageSchema, 'fanpage');

module.exports = fanPageModel;