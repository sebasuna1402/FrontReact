import { useEffect, useRef, useState } from "react";

const ListPhotos = () => {

    const [data, setData] = useState([])
    const inputRef = useRef();

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setData(data.slice(0,10)));
    
    }, []);

    const handleChange = () => {
        let dataFilter = data.filter(item=>item.title.includes(inputRef.current.value));
        setData(dataFilter);
    };

  return (
    <>
        <input ref={inputRef} type="text" placeholder="search" onChange={handleChange} />
       
        <ul>            
        { 
            data.length == 0 
            ? 
            <span>Loading...</span> 
            :
            data.map((item)=>{
                return <li key={item.id}>{item.id}-{item.title} <br />
                    <img src={item.thumbnailUrl} alt="" />
                </li>
            })
        }
        </ul>
    </>
  )
}

export default ListPhotos