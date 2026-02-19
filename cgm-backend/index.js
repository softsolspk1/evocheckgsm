const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// Auth Middlewares
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Login API
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    // This is a mockup; in production, query DB and check hash
    if (email && password) {
        const token = jwt.sign({ email, role: 'SUPER_ADMIN' }, JWT_SECRET);
        res.json({ token, role: 'SUPER_ADMIN' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Orders API
app.get('/api/orders', authenticateToken, async (req, res) => {
    // Mock data for now
    res.json([
        { id: '1', patient: 'Test Patient', status: 'Pending', city: 'Karachi' }
    ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
