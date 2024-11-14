import React from 'react'

const UpdateUser = () => {
  return (
    <div>
      <h1>Update User</h1>
      <form>
                <div class="form-group">
                    <label for="name">Update Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" />
                </div>
                <button type="submit" class="btn btn-primary">Update User</button>
            </form>
    </div>
  )
}

export default UpdateUser
