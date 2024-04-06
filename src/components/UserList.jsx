import React from 'react'
import { useUsers } from '../hooks/useUsers'
import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const [users, isLoading, error] = useUsers();
    const navigate = useNavigate();
    if (isLoading) return <div className="loading">Loading.....</div>
    if (error) return <div className="error">Error: {error}</div>


  return (
    <div className='content'>
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
