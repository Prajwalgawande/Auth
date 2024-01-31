import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleLogout = async () => {
    const token = await localStorage.removeItem('token');
    toast.success("Logout Scussfully!", {
      position: 'top-right',
      autoClose: 4000,
    })
    navigate('/login');
  }
const users=[
  {
    name:"Prajwal",
    createdDate:"04/10/2015",
    Role:"Admin",
    status:"Active",
    Action:"none"
  },
  {
    name:"Prajwal",
    createdDate:"04/10/2015",
    Role:"Admin",
    status:"Active",
    Action:"none"
  },
  {
    name:"Prajwal",
    createdDate:"04/10/2015",
    Role:"Admin",
    status:"Active",
    Action:"none"
  },
  {
    name:"Prajwal",
    createdDate:"04/10/2015",
    Role:"Admin",
    status:"Active",
    Action:"none"
  },
  {
    name:"Prajwal",
    createdDate:"04/10/2015",
    Role:"Admin",
    status:"Active",
    Action:"none"
  },
  {
    name:"Prajwal",
    createdDate:"04/10/2015",
    Role:"Admin",
    status:"Active",
    Action:"none"
  },
]

  return (
    <>
    <button className="logout"onClick={handleLogout}>Logout</button>
    <div className="table">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date Created</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
         {users.map((user)=>{
          return  <tr>
          <td scope="row" data-label="Account">{user.name}</td>
          <td data-label="Due Date">{user.createdDate}</td>
          <td data-label="Amount">{user.Role}</td>
          <td data-label="Period">{user.status}</td>
          <td data-label="Period">{user.Action}</td>
        </tr>
         })}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Home