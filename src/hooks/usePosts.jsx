import { useState, useEffect } from "react"

export const usePosts = (userId) => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
   
    useEffect(()=> {
        if(!userId) return;
        setIsLoading(true);
        const fetchPosts = async() => {
            try {
                const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
                const response = await fetch(url);
                if(response.ok){
                    const posts = await response.json()
                    setPosts(posts)
                }else{
                    throw new Error("Can't fetch posts in try")
                }
            }catch(error){
                setError("Can't fetch posts")
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchPosts()
    },[userId])

  return[posts,isLoading,error]
}
