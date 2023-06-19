const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
  console.log(req.params.text, req.params.tag, req.params.username, req);
});

app.post('/test', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
  console.log(req.params.text, req.params.tag, req.params.username, req);
});

app.put('/test', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
  console.log(req.params.text, req.params.tag, req.params.username, req);
});



const ideasRouter = require('./routes/ideas');
const e = require('express');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
