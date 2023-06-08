import { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { create } from "../../../services/CandidateService";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ListCandidates from "../ListCandidates";

const AddCandidate = () => {
  const queryClient = useQueryClient();
  const candidateName = useRef(null);
  const candidateEmail = useRef(null);
  const candidateSummary = useRef(null);
  const { register, handleSubmit, reset } = useForm();
  const [showList, setShowList] = useState(false);
  const mutation = useMutation("candidate", create, {
    onSettled: () => queryClient.invalidateQueries("candidates"),
    mutationKey: "candidate"
    
  }
  );

  const onSubmit = (data) => {
    handleSave(data);
    reset();
  };

  const handleSave = (data) => {
    let newCandidate = {
      name: data.name,
      email: data.email,
      summary: data.summary
    };
    mutation.mutateAsync(newCandidate);
    setShowList(true); // Mostrar el componente ListCandidates después de guardar los datos
  };

  return (
    <div>
      <h2>List Candidates</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="name">Name:</label>
          <input type="text" {...register('name', { required: true })} required/>
        </div>
        <div className="form-group">
          <label className="email">Email:</label>
          <input type="email" {...register('email', { required: true })} required/>
        </div>
        <div className="form-group">
          <label className="summary">Summary:</label>
          <textarea {...register('summary', { required: true })} rows="5" required></textarea>
        </div>
        <div>
          <button className="btnPostCandidate" type="submit">Save</button>
        </div>
      </form>
      {showList && <ListCandidates />}
    </div>
  );
};

export default AddCandidate;
