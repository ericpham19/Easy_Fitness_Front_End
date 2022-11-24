import {useState, useEffect} from 'react'
import axios from "axios";
const UseAxios = (param) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    axios.defaults.baseURL= 'http://localhost:3000/api/v1'
    
    const fetchData= async (param) => {
        try{
            setLoading(true)
            const result= await axios.get(param)
            setResponse(result.data)
        } catch (err) {
            setError(err);
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param)
    }, [])

    

  return {
        response, loading, error
  }
}

export default UseAxios;