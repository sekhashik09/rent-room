import express from 'express';
import connectDB from './db/db.js';
import authRoutes from './routes/auth.route.js';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Set up the auth routes with /api/auth prefix
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
