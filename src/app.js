import express from "express"
import cors  from "cors"
import routes from "./routes/index.js"

const app = express()
const port = 8100

app.use(cors('*'))
app.use(express.json())
app.use(routes)
app.use(express.static('C:/Users/Everson/Desktop/newHouse/public'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})