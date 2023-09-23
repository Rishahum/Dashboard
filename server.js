const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const { ObjectId } = require('mongodb');
const cors = require('cors');


dotenv.config();

const newSchema = new mongoose.Schema({
_id: ObjectId,
end_year: String,
intensity: Number,
sector: String,
topic: String,
insight: String,
url: String,
region: String,
start_year: String,
impact: String,
added: String,
published: String,
country: String,
relevance: Number,
pestle: String,
source: String,
title: String,
likelihood: Number,
});



const User = mongoose.model('User', newSchema);

const app = express();
app.use(cors({
  origin: 'http://localhost:5500', 
}));
app.use(bodyparser.json());
app.use(express.json());


mongoose
.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('connected to db');
})
.catch((err) => console.log('error', err));

app.get('/api/data',  async(req, res) => {
try {


 const data =  await User.find({})

 const intensity = data.map(item => item.intensity);
 const country=data.map(item=>item.country);
const year = data.map(item=>item.start_year)
 const likelihood = data.map(item=> item.likelihood);
 const topics=data.map(item=>item.topic)
 const relevance = data.map(item=>item.relevance)

  
  res.json({intensity, likelihood,relevance,year,country,topics});
  
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Error fetching data' });
}
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// module.exports={intensityArray}
