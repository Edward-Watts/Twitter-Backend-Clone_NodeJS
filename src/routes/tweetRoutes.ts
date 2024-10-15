import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();

const prisma = new PrismaClient();

// Tweet CRUD

// Create Tweet
router.post('/', async(req, res)=>{
    const {content, image, userId} = req.body;
    try {
        const result = await prisma.tweet.create({
            data: {
                content,
                image,
                userId
            }
        })
        res.json(result);
    }
    catch (e) {
        res.status(404).json({error: "Page not found"});
    }
   
});


// Lists Tweets
router.get('/', async(req, res)=>{
    const allTweets = await prisma.tweet.findMany();
    res.json(allTweets);
});


// Get one Tweet
router.get('/:id', async(req, res)=>{
    const { id } = req.params;
    const tweet = await prisma.tweet.findUnique({where: {id: Number(id)}});
    res.json(tweet);
});

// Update Tweet
router.put('/:id', async(req, res)=>{
    const { id } = req.params;
    const {image, content, userId} = req.body
    try {
        const result = await prisma.tweet.update({where: {id: Number(id)}, data: {
            image,
            content,
            userId
        }});
        res.json(result);
    }
    catch (e) {
        res.status(400).json({error: 'Failed to update tweet'});
    }
    
});

// Delete Tweet
router.delete('/:id', async(req, res)=>{
    const { id } = req.params;
    await prisma.tweet.delete({where: {id: Number(id)}})
    res.sendStatus(200);
});


export default router;