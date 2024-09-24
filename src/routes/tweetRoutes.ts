import express from "express";

const router = express.Router();

// Tweet CRUD

// Create Tweet
router.post('/', (req, res)=>{
    res.status(501).json({error: 'Implemented'})
});


// Lists Tweets
router.get('/', (req, res)=>{
    res.status(501).json({error: 'Implemented'})
});


// Get one Tweet
router.get('/:id', (req, res)=>{
    const { id } = req.params;
    res.status(501).json({error: `Implemented: ${id}`});
});

// Update Tweet
router.put('/:id', (req, res)=>{
    const { id } = req.params;
    res.status(501).json({error: `Implemented: ${id}`});
});

// Delete Tweet
router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    res.status(501).json({error: `Implemented: ${id}`});
});


export default router;