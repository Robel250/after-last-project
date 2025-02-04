


import React from 'react';
import BackTable from '../components/Home/BackTable';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token'); 
  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:4444/workouts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error("Error deleting the book:", error);
      });
  };

  return (
    <div className="p-4">
      <BackTable />
      <h1>Delete Book</h1>
      <div className="d-flex flex-column flex-justify-center border-danger round-xl p-5">
        <h5 className="display-5 my-5 text-center">
          Are You Sure You Want to Delete This Book?
        </h5>
        <button
          className="p-4 btn btn-danger text-white m-8"
          onClick={handleDeleteBook}
        >
          Yes, Delete It
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;



