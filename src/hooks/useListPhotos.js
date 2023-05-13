import { useEffect, useState } from "react";
import { getPhotos } from "../services/PhotoService";

const useListPhotos = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
          const dataResult = await getPhotos();
          setData(dataResult);
        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, []);

    return { data };
}

export default useListPhotos;