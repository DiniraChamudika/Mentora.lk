import { Router } from 'express';
import { authenticateToken, authorizeRoles, AuthRequest } from '../middleware/auth';

const router = Router();

// Only admins can access
router.get('/dashboard', authenticateToken, authorizeRoles('admin'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'Welcome to Admin Dashboard',
    user: req.user 
  });
});

router.get('/users', authenticateToken, authorizeRoles('admin'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'All Users',
    users: [
      { id: 1, name: 'Student User', role: 'student' },
      { id: 2, name: 'Tutor User', role: 'tutor' },
      { id: 3, name: 'Admin User', role: 'admin' }
    ]
  });
});

// Admin can access all routes
router.get('/reports', authenticateToken, authorizeRoles('admin'), (req: AuthRequest, res) => {
  res.json({ 
    message: 'System Reports',
    data: 'Confidential admin data'
  });
});

export default router;