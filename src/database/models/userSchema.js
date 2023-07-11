import mongoose from'../connect.js'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    gifts: {
        type: Array,
        required: true,
        unique: true
    }
})

const dbUser = mongoose.model('user', userSchema)
export default dbUser