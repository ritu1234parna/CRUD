import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function User ()  {

  const [user,setUser]  = useState([{
    Name : "Ritu",
    Email : "scs@sndn.com",
    Age:  29
}]);
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
            {
                user.map((user)=>{
                    return<tr>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Age}</td>
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
      <div>
      <Link to="/getUser">
          <button>Get All User</button>
        </Link>
      </div>
    </div>
  )
}

export default User
