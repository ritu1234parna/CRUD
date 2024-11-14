import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GetAllUserById = () => {
    
    const [user,setUser]=useState();
    useEffect(()=>{
        getUserMethod();
    },[]);
    
    const getUserMethod = () => {
        axios
            .get("http://localhost:4000/api/users/getUserByIdApi/"+)
            .then((res)=>{
                setUser(res.data);
                console.log(user);
            })
            .catch((err)=>console.log(err))
        }
    return (
        <div>
          <h1>User List</h1>
          <a href="/create" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add User +</a>
          <div className='table-responsive'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
            </thead>
            <tbody>
                {       user?.map((user)=>{
                        return<tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <a href="/update" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Update User +</a> 
                                <a href="/create" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Delete User +</a>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            </table>
          </div>
        </div>
      )
    }

    export default GetAllUserById