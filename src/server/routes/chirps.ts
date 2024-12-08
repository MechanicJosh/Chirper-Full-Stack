import {Router} from 'express';
import db from '../db';

//chirpsRouter
const router = Router();


//GET /api/chirps/123
router.get('/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const [chirp] = await db.chirps.getOne(id);
        res.json(chirp);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error', error});
    }
});

//GET /api/chirps
router.get('/', async (req,res) => {
    try {
        const chirps = await db.chirps.getAll();
        res.json(chirps); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error', error});
    }
});

//POST /api/chirps
router.post('/', async (req,res) => {
    try {
        const newChirp = req.body;
        const result = await db.chirps.insert(newChirp.body);
        res.json({message: 'Chirp created', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error', error});
    }
});

export default router;