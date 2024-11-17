import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
// import postRoutes from './routes/post.route.js';
import testRoutes from './routes/test.route.js'


// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Set up the auth routes
app.use('/api/auth', authRoutes);
// app.use('/api/post', postRoutes);
app.use('/api/test', testRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 