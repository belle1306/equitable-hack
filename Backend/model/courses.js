const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title:{
        type: String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
   imageurl:{
        type:String,
        require:false,
        
   },
    name:{  // name of the author
        type:String,
        require:true
    },
    willLearn:{
        type: String,
        require:false
    },
    discription:{
        type: String,
        require:true
    },
    discriptionLong:{
        type: String,
        require:false
    },
    requirement:{
        type: String,
        require:false
    },
    creator:{
        type: Schema.Types.ObjectId, //for refrencing the person who created it 
        required:true,
        ref:'User'
    },
    videoContent:[{
        videoUrl:{
            type:String,
            required:false
        },
        usersWatched:[{
            type:Schema.Types.ObjectId,
            required:false,
            ref:'User'
        }]
    }],
    rating:{
        ratingSum:{
            type:Number,
            required:false,
            default:0
        },
        timesUpdated:{
            type:Number,
            require:false,
            default:0
        },
        ratingFinal:{
            type:Number,
            require:false,
            default:0
        }
    }
    },
    
    {timestamps: true}

);

module.exports = mongoose.model('Course',courseSchema);