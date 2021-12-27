import mongoose, { Document, Schema } from 'mongoose';

interface UserType extends Document{
    name: string;
    age: number;
    country: string;
    description: string;
}

const UserSchema: Schema = new Schema({
    name: {type: String, required: true},
    age: { type: Number, required: true },
    country: {type: String, required: true},
    description: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false,
});


module.exports = mongoose.model<UserType>("User", UserSchema);