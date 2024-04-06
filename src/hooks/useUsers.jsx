import { useState, useEffect } from "react"
export const useUsers = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
   
    useEffect(()=> {
        setIsLoading(true);
        const fetchUsers = async() => {
            try {
                const url = 'https://jsonplaceholder.typicode.com/users';
                const response = await fetch(url);
                if(response.ok){
                    const users = await response.json()
                    setUsers(users)
                }else{
                    throw new Error("Can't fetch users")
                }
            }catch(error){
                setError("Can't fetch users")
            }finally{
                setIsLoading(false)
            }
        }
        fetchUsers()
    },[])

  return[users,isLoading,error]
}
