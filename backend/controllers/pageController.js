import { data } from '../data.js';
import createError from 'http-errors';

// Get all rooms page photos
export const photos = async (req, res, next) => {
  res.status(200).send(data.roomsData);
};

// Get Header component data
export const getHeader = async (req, res, next) => {
  res.status(200).send(data.HeaderData);
};

// Get Footer component data
export const getFooter = async (req, res, next) => {
  res.status(200).send(data.FooterData);
};

// Get About page data
export const getHotels = async (req, res, next) => {
  const cityHotel = data.hotels;
  try {
    if (cityHotel) {
      return res.status(200).json(cityHotel);
    } else {
      res.status(400).send('City hotels not found!');
    }
  } catch (error) {
    console.log(error);
    next(createError(400, 'Hotels not found!'));
  }
};

// Get About page data
export const getAbout = async (req, res, next) => {
  res.status(200).send(data.AboutData);
};
