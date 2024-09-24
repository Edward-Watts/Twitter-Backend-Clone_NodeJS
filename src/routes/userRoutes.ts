import express from "express";

const router = express.Router();

// User CRUD

// Create user
router.post('/', (req, res)=>{
    console.log('Okay')
    res.status(501).json({error: 'Implemented'})
});


// Lists users
router.get('/', (req, res)=>{
    res.status(501).json({error: 'Implemented'})
});


// Get one user
router.get('/:id', (req, res)=>{
    const { id } = req.params;
    res.status(501).json({error: `Implemented: ${id}`});
});

// Update user
router.put('/:id', (req, res)=>{
    const { id } = req.params;
    res.status(501).json({error: `Implemented: ${id}`});
});

// Delete user
router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    res.status(501).json({error: `Implemented: ${id}`});
});


export default router;