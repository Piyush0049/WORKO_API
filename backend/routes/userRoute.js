import express from 'express';
import {
    listUsers,
    getUserById,
    createUser,
    updateUser,
    softDeleteUser,
} from '../Controllers/userController.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', softDeleteUser);

export default router;
