import React from 'react'
import { useUsers } from '../hooks/useUsers'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const [users, isLoading, error] = useUsers();
    const navigate = useNavigate();
    if (isLoading) return <div>Loading.....</div>
    if (error) return <div>Error: {error}</div>


  return (
    <div>
        {
        users.map((user) => (
            <div key={user.id}> 
            <div> {user.name}</div>
           <button onClick={()=> navigate(`/posts/${user.id}`)}>See Details</button>
           <button onClick={()=> navigate(`/todos/${user.id}`)}>See to do list</button>
            </div>
        ))}
    </div>
  )
}
