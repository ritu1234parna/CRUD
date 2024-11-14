const express = require('express')
const app = express()
const mongoose= require('mongoose')
const cors= require('cors')
app.use(cors)
const port = 4000
const userRoutes= require('./routes/userRoutes')
require('dotenv').config();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

app.use("/api/users", userRoutes)