const moviesController=require('../controllers/moviesController') 
const express=require('express');
const router=express.Router();

router.get('/',moviesController.getAllMovieData)
router.get('/:movie_id',moviesController.getMovieDataById)

module.exports=router;
