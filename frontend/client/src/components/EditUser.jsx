import React, { useEffect, useState } from 'react'
import axios from 'axios'
const EditUser = (props) => {

    const [user,setUser]=useState();
    useEffect(()=>{
        getUserbyIdMethod();
    },[]);

    const getUserbyIdMethod = () => {
        axios
        .get('http://localhost:4000/api/users/getUserByIdApi/'+props.message)
        .then((res)=>{
            setUser(res.data);
            console.log(user);
        })
        .catch((err)=>console.log(err))
    }

    

    const handleUpdateUser = (e) => {
        e.preventDefault();
        // Add a new note to the server
        axios
            .put('http://localhost:4000/api/users/createUserApi/'+props.message, {
                name:user.name,
                email:user.email,
                age:user.age
            })
            .then(res=>{console.log("Res.data= ",res.data)})
            .catch((error) => console.error("Error adding note:", error));
    };

    const handleInput =(e)=>{
        console.log(e.target.value, e.target.name);
        let name=e.target.name;
        let value= e.target.value;
        console.log("name= ",name,"value=",value);
        setUser({
            ...user,
            [name]:value,
        });

    };

   
    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleUpdateUser} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={user.name} className="form-control"   placeholder="Enter Name"
                    onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name= "email" value={user.email} className="form-control"  placeholder="Enter Email"
                    onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input name= "age" type="number" value={user.age} className="form-control" placeholder="Enter Age" 
                    onChange={handleInput}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}

export default EditUser
