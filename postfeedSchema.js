var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var postFeedSchema = new mongoose.Schema({
    title:{type:String,default:null},
    content:{type:String,default:null},
    imageName:{type:String,default:null},
    imageType:{type:String,default:null},
    imageData:{type:String,default:null}
});
postFeedSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('postsfeed', postFeedSchema);
