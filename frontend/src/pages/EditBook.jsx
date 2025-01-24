
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import BackTable from '../components/Home/BackTable';
// const EditBook = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [publishYear, setPublishYear] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4444/books/${id}`)
//       .then((response) => {
//         setTitle(response.data.title || '');
//         setAuthor(response.data.author || '');
//         setPublishYear(response.data.publishYear || '');
//       })
//       .catch((error) => {
//         console.error("Error fetching book data:", error);
//       });
//   }, [id]);

//   const handleEditBook = () => {
//     const data = { title, author, publishYear };
    
//     axios
//       .put(`http://localhost:4444/books/${id}`, data)
//       .then(() => navigate('/home'))
//       .catch((error) => console.error("Error updating book data:", error));
//   };

//   return (
//     <div className="p-4">
//         <BackTable/>
//       <h1 className="my-4">Edit Book</h1>

//       <div className="my-4">
//         <label>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="form-control"
//         />
//       </div>

//       <div className="my-4">
//         <label>Author</label>
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="form-control"
//         />
//       </div>

//       <div className="my-4">
//         <label>Publish Year</label>
//         <input
//           type="number"
//           value={publishYear}
//           onChange={(e) => setPublishYear(Number(e.target.value))}
//           className="form-control"
//         />
//       </div>

//       <button className="btn btn-primary mt-3" onClick={handleEditBook}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default EditBook;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackTable from '../components/Home/BackTable';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  useEffect(() => {
    // Fetch the existing book details
    axios
      .get(`http://localhost:4444/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((response) => {
        const { title, author, publishYear } = response.data;
        setTitle(title || '');
        setAuthor(author || '');
        setPublishYear(publishYear || '');
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setErrorMessage("Failed to load book details. Please try again.");
      });
  }, [id, token]);

  const handleEditBook = () => {
    if (!title.trim() || !author.trim() || !publishYear) {
      setErrorMessage("All fields are required.");
      return;
    }

    const data = { title, author, publishYear: Number(publishYear) };

    axios
      .put(`http://localhost:4444/books/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then(() => {
        setErrorMessage('');
        navigate('/home');
      })
      .catch((error) => {
        console.error("Error updating book data:", error);
        setErrorMessage("Failed to update book details. Please try again.");
      });
  };

  return (
    <div className="p-4">
      <BackTable />
      <h1 className="my-4">Edit Book</h1>

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="my-4">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Enter book title"
        />
      </div>

      <div className="my-4">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
          placeholder="Enter author's name"
        />
      </div>

      <div className="my-4">
        <label htmlFor="publishYear">Publish Year</label>
        <input
          id="publishYear"
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="form-control"
          placeholder="Enter publish year"
        />
      </div>

      <button className="btn btn-primary mt-3" onClick={handleEditBook}>
        Save
      </button>
    </div>
  );
};

export default EditBook;
