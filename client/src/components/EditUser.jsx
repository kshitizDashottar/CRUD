import { FormControl, FormGroup, Input, InputLabel, Typography , styled, Button } from "@mui/material";
import { useState , useEffect } from "react";
import { editUser , getUser} from "../service/api";
import {useNavigate , useParams} from 'react-router-dom'
// form group is present in material ui to make form

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

// form control is a type of div only on which there is some css

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = ()=>{

    const [user,setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e)=>{
        // spread operator use kia taki poorani values k sath new values append ho jaye
        // we apply square bracket on key becoz key and value both are variable
        setUser({...user, [e.target.name]: e.target.value})
        console.log(e.target.name , e.target.value);
    }

    const editUserDetails = async()=>{
        await editUser(user , id);
        // whenever add button is clickd we are calling add user api

        navigate('/all');
        // using navigate when we strike add button we will redirected to all user page
    }

    return(
         <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
                {/* by usnig name we can differentiate between these 4  */}
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>

            <FormControl>
                <Button variant="contained"  onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>

         </Container>
    )
}


export default EditUser;