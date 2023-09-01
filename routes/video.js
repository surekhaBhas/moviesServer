const getVideoChunks=require('../controllers/videoStreamController') 
const express=require('express');
const router=express.Router();
const path=require('path')

router.get('/:movie_id',getVideoChunks)


module.exports=router;
