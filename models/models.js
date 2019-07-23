const mongoose = require("mongoose");
const _ = require("underscore");
const config = require("../_config");

module.exports = (wagner) => {
    mongoose.Promise = global.Promise;

    mongoose.connect("mongodb://localhost:27017/"+config.DB);

    wagner.factory('db',()=>mongoose);

    const FanPage = require("./fanpage.models");

    const models = {
        FanPage
    }

    _.each(models,(v,k) =>{
        wagner.factory(k,()=> v);
    })
}