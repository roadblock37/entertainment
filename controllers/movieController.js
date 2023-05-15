const Movie = require("../models/movie");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

// get all movies from database
const getAllItems = async (req, res) => {};
const getItem = async (req, res) => {
  const {
    params: { id: itemId },
  } = req;

  const item = await Movie.findOne({
    _id: itemId,
  });
  if (!item) {
    throw new Error("No item found");
  }
  res.status(StatusCodes.OK).json({ item });
};
const updateItem = async (req, res) => {};
const deleteItem = async (req, res) => {};

module.exports = { getAllItems, getItem, updateItem, deleteItem };
