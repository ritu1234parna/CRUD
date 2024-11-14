const express = require('express')
const app = express()
const mongoose= require('mongoose')
const cors= require('cors')
//const MONGO_URI="mongodb://localhost:27017/crud"
const port = process.env.PORT||4000
const userRoutes= require('./routes/userRoutes')
require('dotenv').config();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
/*mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));
*/
app.use("/api/users", userRoutes);