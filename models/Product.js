import mongoose  from "mongoose"

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxlength:60,
    },
    desc:{
        type:String,
        require:true,
        maxlength:200,
    },
    img:{
        type:String,
        require:true,
        maxlength:200,
    },
    prices:{
        type:[Number],
        required:true
    },
    extraOptions:{
        type:[
            {
            text:{type:String, required:true}, 
            price:{type:Number,require:true},
        },
    ],
   },

},
{ timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);