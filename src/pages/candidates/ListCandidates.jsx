import { useQuery } from "react-query";
import { useState } from 'react';
import { getCandidates, removeCandidate } from "../../services/CandidateService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ListCandidates = () => {

  const { data, isLoading, isError, refetch } = useQuery('candidato', getCandidates, { enabled: true });



  const handleDeleteCandidate = async (id) => {
    try {
      await removeCandidate(id);

      toast.success('Candidate successfully deleted', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      await refetch();

      // Aquí puedes actualizar la lista de candidatos después de eliminar uno
    } catch (error) {
      // Aquí puedes manejar el error en caso de que ocurra
      console.error(error);
    }
  };



  if (isLoading)
    return <div>Loading...</div>

  if (isError)
    return <div>Error</div>

  return (
    <>
      <h2>List Candidates</h2>
      <table border="1" className="tabla">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Summary</td>
            <td>Actions</td>
          </tr>
          {
            data.map((candidates) => (
              <tr key={candidates.id}>
                <td>{candidates.id}</td>
                <td>{candidates.name}</td>
                <td>{candidates.summary}</td>
                <td>
                  <button className="btnView"><FontAwesomeIcon icon={faEye} /></button>
                  <button className="btnSkills"><FontAwesomeIcon icon={faAddressCard} /></button>
                  <button className="btnDelete" onClick={() => handleDeleteCandidate(candidates.id)}><FontAwesomeIcon icon={faUserXmark} /></button>

                </td>
              </tr>

            ))

          }
        </tbody>
      </table>

      <ToastContainer
        className="custom-toast-container"
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};


export default ListCandidates