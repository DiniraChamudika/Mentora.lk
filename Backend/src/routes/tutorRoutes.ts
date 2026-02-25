import { Router } from 'express';
import { authenticateToken, authorizeRoles, AuthRequest } from '../middleware/auth';

const router = Router();

// Only tutors can access
router.get('/dashboard', authenticateToken, authorizeRoles('tutor'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'Welcome to Tutor Dashboard',
    user: req.user 
  });
});

router.get('/students', authenticateToken, authorizeRoles('tutor'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'Your Students',
    students: ['Alice', 'Bob', 'Charlie']
  });
});

export default router;