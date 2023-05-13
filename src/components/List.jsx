import { useEffect, useState } from "react";

const List = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setData(data));
    
    }, []);

  return (
    <>
        <h3>Comments from <pre>https://jsonplaceholder.typicode.com/comments</pre></h3>
        <ul>            
        { 
            data.length == 0 
            ? 
            <span>Loading...</span> 
            :
            data.map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })
        }
        </ul>
    </>
  )
}

export default List