import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/newHouse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default mongoose