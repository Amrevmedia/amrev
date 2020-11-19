var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var formszSchema = new mongoose.Schema({
 		firstname:{type:String,default:null},
    lastname:{type:String,default:null},
    email:{type:String,default:null},
    customertype:{type:String,default:null},
    password:{type:String,default:null}

});
formszSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('names', formszSchema);
