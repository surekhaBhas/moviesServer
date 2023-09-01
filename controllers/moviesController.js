const connectToDB=require('../db')
const getAllMovieData = async (req, res) => {
    try {
        const db = await connectToDB(); // Assuming this returns a promise
        const movies = await db.collection('movies').find().toArray();
        res.status(200).json(movies);
       
        
        if(req.params.movie_id){
            const movieId=req.params.movie_id
            const movie= await db.collection('movies').find({"_id":movieId}).toArray();
            return  res.status(200).json(movie);
        }

    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getMovieDataById=async(req,res)=>{
    try {
        const db = await connectToDB(); // Assuming this returns a promise
        const movieId=req.params.movie_id
        const movie= await db.collection('movies').find({"_id":movieId}).toArray();
        res.status(200).json(movie);

    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = {getAllMovieData,getMovieDataById};