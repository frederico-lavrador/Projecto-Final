import express from 'express';
import { register, login } from '../controllers/userController.js';

const router = express.Router();

router.use((req, res, next) => {
    console.log(`Requested URL: ${req.url}`);
    next();
});

router.post('/register', register);
router.post('/login', login);

export default router;