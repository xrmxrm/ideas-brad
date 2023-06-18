const express = require('express');
const port = 5000;

const app = express();

const ideas = [
    {
        id: 1,
        text: 'Positive Newsletter -- good news only',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2023-06-17',
    },
    {
        id: 2,
        text: 'Milk cartons that turn color with age',
        tag: 'Inventions',
        username: 'SallyRogers',
        date: '2023-06-18',
    },
    {
        id: 3,
        text: 'App to locate nearest working ATM',
        tag: 'Software',
        username: 'BruceBanner',
        date: '2023-06-18',
    },

]

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
});

app.get('/api/ideas', (req, res) => {
    res.json({ success: true, data: ideas })
})

// const ideasRouter = require('./routes/ideas');
// app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
