import express from 'express'
const app = express()
const port = 8100

app.use(express.static('C:/Users/Everson/Desktop/newHouse/public/'))

app.get('/home', (req, res) => {
    res.send('index.html')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})