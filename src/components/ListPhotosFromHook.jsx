import useListPhotos from '../hooks/useListPhotos'

export const ListPhotosFromHook = () => {

  const { data }  = useListPhotos();

  return (
    <> 
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
