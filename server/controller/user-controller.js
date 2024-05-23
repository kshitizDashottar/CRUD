 import User from  '../schema/user-schema.js'


export const addUser = async (request , response)=>{
      const user = request.body;

      const newuser = new User(user);

    //   we are validating our user accoording to mongoose model  and now we will  store it into  mongodb

    try{
        await newuser.save();
        response.status(201).json(newuser);
    }catch(error){
        response.status(409).json({message : error.message});
    }
      
}

export const getUsers = async (request , response)=>{

    try{
        // empty object returns all object
        const users = await User.find({});
        response.status(200).json(users);
    }catch (error){
        response.status(404).json({message : error.message});
    }
}


export const getUser = async (request , response)=>{
     
    try{
        // empty object returns all object
        // const user = await User.find({_id: request.params.id});
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch (error){
        response.status(404).json({message : error.message});
    }
}


export const editUser = async (request , response)=>{

    let user = request.body;
    const editUser = new User(user);
     
    try{

        await User.updateOne({_id: request.params.id} , editUser);
        response.status(201).json(editUser);
       
    }catch (error){
         
        response.status(409).json({message : error.message});
    }
}

export const deleteUser = async (request , response)=>{

   
     
    try{

        await User.deleteOne({_id: request.params.id});
        
        response.status(200).json({message : 'User deleted successfully'});
    }catch (error){
         
        response.status(409).json({message : error.message});
    }
}