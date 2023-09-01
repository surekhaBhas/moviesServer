const connectToDB = require('../db');
const rangeParser = require('range-parser');
const axios = require('axios');
const fs = require('fs');
const getVideoChunks=async(req,res)=>{
    try {
        const db = await connectToDB(); 
        const movieId = req.params.movie_id;
        const movie = await db.collection('movies').findOne({ _id: movieId });

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        const videoUrl = movie.trailer;
        const htmlContent=`
        <!DOCTYPE html>
          <html>
          <head>
          <title>Video Streaming</title>
         </head>
        <body>
         <iframe width="640" height="360" src=${videoUrl} frameborder="0" allowfullscreen></iframe>
         </body>
         </html>
        `
       res.send(htmlContent)
             
           
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports=getVideoChunks