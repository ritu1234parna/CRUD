const express = require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const app = express()
const port = 3000
require('dotenv').config();
app.use(express.json());
app.use(cors)
const userRoutes= require('./routes/userRoutes')

// MongoDB connection
/*mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));
*/
//server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//routes
app.use("/api/users", userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})