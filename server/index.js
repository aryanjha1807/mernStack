const express = require('express')
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb')
const app = express()

app.use(cors())
app.use(express.json())
const client = new MongoClient('mongodb+srv://aryan:bv5C0H5PA5jO43Yq@cluster0.0jxym93.mongodb.net/')
client.connect()
const db = client.db('counselling1')
const col1 = db.collection('register')
//col1.insertOne({"student":123})
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>This is about page</h1>')
})
app.post('/register', (req, res) => {
    col1.insertOne(req.body)
    res.send("inserted successfully")
})

app.get('/retrieve', async (req, res) => {
    const result = await col1.find().toArray()
    console.log(result)
    res.send(result)
})
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, role, email, password } = req.body;
    const result = col1.updateOne({ _id: new ObjectId(id) },
        { $set: { name: name, role: role, email: email, password: password } })
    res.send('updated')

})
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    const result = await col1.deleteOne({ _id: new ObjectId(id) })
    res.json({ message: "deleted successfully" })
})

app.listen('8080', () => {
    console.log('server is running')
})
