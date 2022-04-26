const multer = require('multer');
const {registerMovie,login, update} =require('../controllers/auth.controller')
const router = require('express').Router()
const path = require('path')
const Images = require('../models/images.models')

router.post(
    "/register",
    async (req, res, next) => {
        try {
            const user = await registerMovie(req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
);

router.put(
  "/:id",
  async (req, res, next) => {
    try {
      const movie = await update(req.params, req.body);
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }
);
  
router.post(
"/login",
    async (req, res, next) => {
        try {
        const { email, password } = req.body;
        const data = await login(email, password);
        res.status(200).json(data);
        } catch (error) {
        next(error);
        }
    }
);


module.exports= router