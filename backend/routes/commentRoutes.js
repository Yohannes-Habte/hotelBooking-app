import express from 'express';
import { createMessage, deletComment, getAllComments } from '../controllers/commentController.js';

// Comment Router
const commentRouter = express.Router();

// Comment Routes
commentRouter.post('/createComment', createMessage);
commentRouter.get('/', getAllComments);
commentRouter.delete('/:id', deletComment);

// Export comment router
export default commentRouter;
