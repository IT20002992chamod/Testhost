var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://chamod1:chamod123@cluster0.jduobef.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
