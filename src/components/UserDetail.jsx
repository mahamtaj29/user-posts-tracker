import React from 'react'
import { usePosts } from '../hooks/usePosts'
import { useParams } from 'react-router-dom';

export const UserDetail = () => {
  //using useParams to retrive userId from URL
    const {userId} = useParams();
    const [posts, isLoading, error] = usePosts(userId);

    if (isLoading) return <div>Loading.....</div>
    if (error) return <div>Error: {error}</div>
  return (
    <div className='content'>
        <h2> Posts by User {userId}</h2>
        {
        posts.map((post) => (
            <div key={post.id}> 
            <div>{post.body}</div>
            </div>
        ))}
    </div>
  )
}
