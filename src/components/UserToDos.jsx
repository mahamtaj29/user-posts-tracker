import React from 'react'
import { useParams } from 'react-router-dom'
import { useToDos } from '../hooks/useToDos';

export const UserToDos = () => {
    const {userId} = useParams();
    const [todos, isLoading, error] = useToDos(userId);

    if(isLoading) return <div> Loading ....</div>
    if(error) return <div> Error: {error}</div>
  return (
    <>
    <div>UserToDos</div>
    <h2> ToDos for User {userId} </h2>
    <ul>
        {
            todos.map((todo) => (
                <li key={todo.id}>
                {todo.title}
                </li>
            ))}
    </ul>
    </>
  )
}
