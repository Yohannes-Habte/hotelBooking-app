import { useEffect, useState } from 'react';
import axios from 'axios';


const Fetch = (url) => {
    // State variables for fetching data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    // useEffect
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const {data} = await axios.get(url);
          setData(data);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      };
  
      fetchData();
    }, [url]);
  
    // Function to refetch data
    const reFetch = async () => {
      setLoading(true);
      try {
        const {data} = await axios.get(url);
        setData(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
  
    return {data, loading, error, reFetch}
  };

export default Fetch;
