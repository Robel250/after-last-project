
// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const createBooks = () => {
//   const [title,setTitle]=useState('');
//   const [author,setAuthor]=useState('');
//   const [publishYear,setPublishYear]=useState('');
//   const navigate=useNavigate();
//   const handleSaveBooks=()=>{
//     const data={
//       title,
//       author,
//       publishYear
//     };
//     axios
//     .post('http://localhost:4444/books',data)
//     .then(()=>{navigate('/');})
//     .catch((error)=>{
//       console.log(error);
//     })
//   }



//   return (
//     <div className='p-4'>
//     <h1 className='my-4'>Create Book</h1>
//     <div className='p-4'>
//       <div className='my-4'>
//       <label className='my-4'>title</label>
//       <input type="text"
//              value={title}
//              onChange={(e)=>setTitle(e.target.value)}
//              className='mx-5 px-4 py-2' />
//       </div>
//       <div className='my-4'>
//       <label className='my-4'>Author</label>
//       <input type="text"
//              value={author}
//              onChange={(e)=>setAuthor(e.target.value)}
//              className='mx-5 px-4 py-2' />
//       </div>
//       <div className='my-4'>
//       <label className='my-4'>Publish Year</label>
//       <input type="number"
//              value={publishYear}
//              onChange={(e)=>setPublishYear(e.target.value)}
//              className='mx-5 px-4 py-2' />
//       </div>
//       <button className='btn btn-primary btn-lg' onClick={handleSaveBooks}>save</button>
//     </div>
  
// </div>
//   )
// }

// export default createBooks

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackTable from '../components/Home/BackTable';
import { useSnackbar } from 'notistack';
function CreateBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [image,setImage]=useState(null);
  const navigate = useNavigate();
const{enqueueSnackbar}=useSnackbar()
  const handleSaveBooks = () => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");
    console.log(token)
    const data = { title, author, publishYear,image };
    axios.post('https://backend-61w2.onrender.com/books', data,{
      headers:{
        'content-Type':'multipart/form-data',
         Authorization: `Bearer ${token}`,
      },
    })

      .then(() =>{
        enqueueSnackbar("book created succesful")
         navigate('/home')})
      .catch(error => console.error(error));
  };

  return (
    <div className='p-4'>
      <BackTable/>
      <h1 className='my-4'>Create Book</h1>
      <div className='my-4'>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label>Publish Year</label>
        <input
          type="number"
          value={publishYear}
          onChange={e => setPublishYear(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Image</label>
        <input type="file"
                onChange={(e)=>setImage(e.target.files)}
                className='border-2 border-gray-500 px-4 py-2 w-full' />
      </div>
      <button className='btn btn-primary mt-3' onClick={handleSaveBooks}>
        Save
      </button>
    </div>
  );
}

export default CreateBooks;



