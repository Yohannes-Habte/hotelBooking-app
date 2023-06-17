import { data } from "../data.js"

// Get all rooms page photos
export const photos = async (req, res, next) => {
    res.status(200).send(data.roomsData)
}

// Get Header component data
export const getHeader = async (req, res, next) => {
    res.status(200).send(data.HeaderData)
}

// Get Footer component data
export const getFooter = async (req, res, next) => {
    res.status(200).send(data.FooterData)
}

// Get About page data
export const getAbout = async (req, res, next) => {
    res.status(200).send(data.AboutData)
}