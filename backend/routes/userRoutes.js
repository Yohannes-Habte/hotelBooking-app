import express from 'express';
import {
  countUsers,
  deleteUser,
  deleteUsers,
  getUser,
  getUsers,
  loginUser,
  registerUser,
  updateUser,
} from '../controllers/userController.js';
import { adminAuth, userAuth } from '../middlewares/verification.js';

// Room Router
const userRouter = express.Router();

// User routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.put('/update',  updateUser );
userRouter.get('/:id',  getUser);
userRouter.get('/', getUsers); 
userRouter.get('/count/allUsers', countUsers);
userRouter.delete('/:id', deleteUser);
userRouter.delete('/', deleteUsers);

// Export User Router
export default userRouter;
