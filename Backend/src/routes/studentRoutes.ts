import { Router } from 'express';
import { authenticateToken, authorizeRoles, AuthRequest } from '../middleware/auth';

const router = Router();

// Only students can access
router.get('/dashboard', authenticateToken, authorizeRoles('student'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'Welcome to Student Dashboard',
    user: req.user 
  });
});

router.get('/courses', authenticateToken, authorizeRoles('student'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'Student Courses',
    courses: ['Math 101', 'Science 202', 'History 303']
  });
});

export default router;