import { useQuery } from "react-query";

import { getCandidates } from "../../services/CandidateService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ListCandidates = () => {

  const { data, isLoading, isError } = useQuery('candidates', getCandidates,{ enabled: true });


  if(isLoading)
    return <div>Loading...</div>

  if(isError)
    return <div>Error</div>

  return (
    <>
 <h2>List Candidates</h2>
    <table border="1" className="tabla">
        <tbody>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Summary</td>
                <td>Actions</td>
            </tr>
            {
                    data.map((candidates)=>(
                        <tr key={candidates.id}>
                        <td>{candidates.id}</td>
                        <td>{candidates.name}</td> 
                        <td>{candidates.email}</td>
                        <td>{candidates.summary}</td>
                        <td>
                        <button className="btnView"><FontAwesomeIcon icon={faEye} /></button>
                        <button className="btnSkills"><FontAwesomeIcon icon={faAddressCard} /></button>
                    <button className="btnDelete"><FontAwesomeIcon icon={faUserXmark} /></button>
                        
                        </td>
                        </tr>
                    
                ))
            
            } 
        </tbody>
    </table>
    
    </>
    )
}


export default ListCandidates