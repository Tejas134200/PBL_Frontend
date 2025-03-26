import { Router } from 'express';
import * as authControl from '../controllers/authControl.js';

const router = Router();

router.get('/signup', authControl.signup_get);
router.post('/signup', authControl.signup_post);
router.get('/login', authControl.login_get);
router.post('/login', authControl.login_post);

export default router;
