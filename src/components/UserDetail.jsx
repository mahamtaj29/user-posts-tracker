import React from 'react'
import { usePosts } from '../hooks/usePosts'
import { useParams } from 'react-router-dom';

export const UserDetail = () => {
    const {userId} = useParams();
    const [posts, isLoading, error] = usePosts(userId);

    if (isLoading) return <div>Loading.....</div>
    if (error) return <div>Error: {error}</div>
  return (
    <div>
        <h2> Posts by User {userId}</h2>
        {
        posts.map((post) => (
            <div key={post.id}> 
            {post.body}
            </div>
        ))}
    </div>
  )
}
