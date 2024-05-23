import mongoose from "mongoose";

const Connection = async(username , password)=>{
    const URL = `mongodb://${username}:${password}@ac-s8q7s21-shard-00-00.urg7tf5.mongodb.net:27017,ac-s8q7s21-shard-00-01.urg7tf5.mongodb.net:27017,ac-s8q7s21-shard-00-02.urg7tf5.mongodb.net:27017/?ssl=true&replicaSet=atlas-n4oftd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=CRUD-APP`;
    try{
        await mongoose.connect(URL , {useUnifiedTopology:true, useNewUrlParser: true});
        console.log('DB Connected Successfully');
    }catch(error){
        console.log('Error while connecting with database' , error.message);
    }

}


export default Connection;