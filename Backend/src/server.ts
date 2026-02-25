import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import studentRoutes from './routes/studentRoutes';
import tutorRoutes from './routes/tutorRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/tutor', tutorRoutes);
app.use('/api/admin', adminRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'JWT Authentication API',
    endpoints: {
      auth: [
        'POST /api/auth/register',
        'POST /api/auth/login'
      ],
      student: [
        'GET /api/student/dashboard',
        'GET /api/student/courses'
      ],
      tutor: [
        'GET /api/tutor/dashboard',
        'GET /api/tutor/students'
      ],
      admin: [
        'GET /api/admin/dashboard',
        'GET /api/admin/users',
        'GET /api/admin/reports'
      ]
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

export default app;