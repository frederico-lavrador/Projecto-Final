import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/books', bookRoutes);



app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});