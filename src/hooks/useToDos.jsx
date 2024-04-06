import { useState, useEffect } from "react"

export const useToDos = (userId) => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
   
    useEffect(()=> {
        if(!userId) return;
        setIsLoading(true);
        const fetchToDos = async() => {
            try {
                const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
                const response = await fetch(url);
                if(response.ok){
                    const todos = await response.json()
                    setTodos(todos)
                }else{
                    throw new Error("Can't fetch todos")
                }
            }catch(error){
                setError("Can't fetch todos")
            }finally{
                setIsLoading(false)
            }
        }
        fetchToDos()
    },[userId])

  return[todos,isLoading,error]
}
