const createError = require("http-errors");
require('dotenv').config()
const User = require("../models/user.model");
const Movie = require("../models/movie.models")

const registerMovie = async ({ movieName, Rating, Cast, Genre, releaseDate  }) => {

  await new Movie({
    movieName,
    Rating,
    Cast,
    Genre,
    releaseDate
  }).save();
};

const login = async (email, password) => {
  const user = await User.findOne({
    email,
    password,
  });

  if (!user) {
    throw createError(400, "Invalid credentials");
  }

  const { _id } = user;

  return { user };
};

const update = async ({ id }, movie) => {
  let updatedMovie = await Movie.findOneAndUpdate({ MovieId: id }, movie);
  if (!updatedMovie) {
      throw createError(400, "Movie not exists!")
  }
  console.log(updatedMovie)
  return updatedMovie;
}
module.exports={registerMovie,login, update}