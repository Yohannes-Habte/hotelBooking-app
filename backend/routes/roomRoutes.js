import express from 'express';
import {
  createRoom,
  deleteAllRooms,
  deleteOneRoom,
  getAllRooms,
  getONeRoom,
  roomsCount,
  updateRoom,
  updateRoomAvailability,
} from '../controllers/roomController.js';

// Room Router
const roomRouter = express.Router();

// Room Routes

roomRouter.post('/:hotelId/createRoom', createRoom);
roomRouter.put('/updateRoom/:id', updateRoom);
roomRouter.put('/availability/:id', updateRoomAvailability);
roomRouter.get('/:id', getONeRoom);
roomRouter.get('/', getAllRooms);
roomRouter.get('/count/allRooms', roomsCount);
roomRouter.delete('/:hotelId/:id', deleteOneRoom);
roomRouter.delete('/', deleteAllRooms);

// Export Room Router
export default roomRouter;
