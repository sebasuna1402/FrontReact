import React from 'react';
import { useQuery } from 'react-query';
import { getCandidateById, removeCandidate } from '../../services/CandidateService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';



const CandidateDetails = ({ id }) => {
  const { data: candidate, isLoading, isError, refetch } = useQuery(['candidate', id], () =>
    getCandidateById(id),
    { enabled: !!id }
  );


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <>
      <h2>Candidate Details</h2>
      <div>
        <label>ID:</label>
        <span>{candidate.id}</span>
      </div>
      <div>
        <label>Name:</label>
        <span>{candidate.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{candidate.email}</span>
      </div>
      <div>
        <label>Summary:</label>
        <span>{candidate.summary}</span>
      </div>
      <div>
      </div>

      
    </>
  );
};

export default CandidateDetails;
