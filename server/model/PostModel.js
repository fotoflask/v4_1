const mongoose = require('mongoose');

let post =  new mongoose.Schema({
    duserId : { type: Number, ref: 'UserDetails' },    
    dusername : String,
    dprofilename : String,
    dprofilepic : String,
    postid : Number,
    Date : Date,
    Picture:{
        type:String,
    },
    Description_of_post : String,
    Tag : [String],
    likes_number : Number,
    likes : [String],
    comments : [[String],[String]],
    comments_number : Number,
    Shares : Number
});

module.exports = mongoose.model('post',post);;

// const itemSchema = mongoose.Schema({
// caption:String,
// image: String,
// },{ timestamps: true })
// const Item = mongoose.model('Item',itemSchema);
// module.exports = Item;    