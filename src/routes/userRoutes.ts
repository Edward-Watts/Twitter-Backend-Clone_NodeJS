import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();

// User CRUD

// Create user
router.post('/', (req, res)=>{
    console.log('Okay')
    res.status(501).json({error: 'Implemented'})
});


// Lists users
router.get('/', async (req, res)=>{
    const allUsers = await prisma.user.findMany()
    res.json(allUsers);
});


// Get one user
router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const user = await prisma.user.findUnique({where: {id: Number(id)}})
    res.json(user);
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