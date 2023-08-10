import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.l49flcg.mongodb.net/newHouse`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default mongoose