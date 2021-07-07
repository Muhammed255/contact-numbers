import mongoose from 'mongoose';

const Contact = mongoose.Schema({
    name : {
        type : String,
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    notes: {
        type: String
    }
})
export default mongoose.model( 'contacts' , Contact);