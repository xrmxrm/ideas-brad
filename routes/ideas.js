const express = require('express');
const router = express.Router();
// const Idea = require('../models/Idea');

const ideas = [
    {
        id: 1,
        text: 'Positive Newsletter -- no bad news',
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

];

// Get all ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas })
})

// Get one idea
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    if (!idea) {
        return res
          .status(404)
          .json({ success: false, error: 'Resource not found' })
    }
    res.json({ success: true, data: idea })
})

// Add an idea
router.post('/',(req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0,10),
    }

    ideas.push(idea);

    res.json({ success: true, data: idea });
})

// Delete an idea
// router.delete('/:id', (req, res) => {
//     const idea = ideas.find((idea) => idea.id === +req.params.id);
//     if (!idea) {
//         return res
//           .status(404)
//           .json({ success: false, error: 'Resource not found' })
//     }

//     const ix = ideas.indexOf(+id);
//     ideas.splice(ix);

//     res.json({ success: true, data: idea })
// })

// Update idea
router.put('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    if (!idea) {
        return res
          .status(404)
          .json({ success: false, error: 'Resource not found' })
    }

idea.text = req.body.text || idea.text;
idea.tag = req.body.tag || idea.tag;

    res.json({ success: true, data: idea })
})



module.exports = router;
