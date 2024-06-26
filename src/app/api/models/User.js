import { Schema, model,models }  from "mongoose";

const UserSchema = new Schema({
    name: { type: String },
    email: {type: String, required: true, index:true,unique: true},
    password:{type:String,},
    image:{type:String},
    phone:{type:String},
    streetAddress:{type:String},
    postalCode:{type:String},
    city:{type:String},
    country:{type:String},
    admin:{type:Boolean,default:false},
    purpose:{type:String}
},{timestamps:true});






export const User = models?.User || model("User", UserSchema);