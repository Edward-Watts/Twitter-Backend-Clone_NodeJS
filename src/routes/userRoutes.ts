import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();

// User CRUD

// Create user
router.post('/', async(req, res)=>{
    const { email, name, username } = req.body;
    try{
        const result = await prisma.user.create({data: {
            email,
            name,
            username,
            bio: "Hi! I am new on Twitter"
        }})
        res.json(result);
    }
    catch (e) {
        res.status(400).json({error: "Username or Email should be unique"});
    }
    
});


// Lists users
router.get('/', async (req, res)=>{
    const allUsers = await prisma.user.findMany({include: {tweets: true}}) // use select to get only specific key values (where data is bulky)
    res.json(allUsers);
});


// Get one user
router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const user = await prisma.user.findUnique({where: {id: Number(id)}})
    res.json(user);
});

// Update user
router.put('/:id', async(req, res)=>{
    const { id } = req.params;
    const {bio, name, image} = req.body;
    try {
        const result = await prisma.user.update({where: {id: Number(id)}, data: {bio, name, image}});
        res.json(result);
    }
    catch (e) {
        res.status(400).json({error: "Failed to update the user"});
    }
    
});

// Delete user
router.delete('/:id', async(req, res)=>{
    const { id } = req.params;
    await prisma.user.delete({where: {id: Number(id)}});
    res.sendStatus(200);
});


export default router;