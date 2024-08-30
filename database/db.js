import mongoose  from "mongoose";

export const Connection = async () =>{
    // const URL = 'mongodb://localhost:27017';
    const URL = process.env.MONGO_URL;
    try{
      const data = await mongoose.connect(URL)
      console.log(`Database Connect Succesfully, ${data.connection.host}`)
    }catch(error){
        console.log('Error while connecting with the database', error.message)
    }
}


export default Connection;