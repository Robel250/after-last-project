import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackTable from '../components/Home/BackTable';
import { useSnackbar } from 'notistack';

function CreateBooks() {
  const [excersize, setexcersize] = useState('');
  const [load, setload] = useState('');
  const [reps, setreps] = useState('');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBooks = () => {
   
    const token = localStorage.getItem("token");

    
    const formData = {
      excersize,
      load,
      reps,
    };
  
    
    axios.post('http://localhost:4444/workouts', formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        enqueueSnackbar("Workout created successfully", { variant: 'success' });
        setexcersize('');
        setload('');
        setreps('');
        
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar("An error occurred while creating the workout", { variant: 'error' });
      });
  };

  return (
    <div className='p-4'>
      <BackTable />
      <h1 className='my-4'>Create New Workout</h1>
      <div className='my-4'>
        <label>Exercise</label>
        <input
          type="text"
          value={excersize}
          onChange={e => setexcersize(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label>Load</label>
        <input
          type="number"
          value={load}
          onChange={e => setload(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label>Reps</label>
        <input
          type="number"
          value={reps}
          onChange={e => setreps(e.target.value)}
          className='form-control'
        />
      </div>
      <button className='btn btn-primary mt-3' onClick={handleSaveBooks}>
        Save Workout
      </button>
    </div>
  );
}

export default CreateBooks;
