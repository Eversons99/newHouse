import mongoose from "../connect.js";

const listSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        reqired: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
})

const dbList = mongoose.model('lists', listSchema)
export default dbList