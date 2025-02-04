import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackTable from '../components/Home/BackTable'

const ShowBook = () => {

    const [workout,setworkout]=useState(null);
    const {id}=useParams()
    const token=localStorage.getItem("token")
    useEffect(()=>{
        axios
        .get(`http://localhost:4444/workouts/${id}`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        .then((response)=>{
            setworkout(response.data);
            console.log(response.data)
        })
        .catch((error)=>{console.log(error);})
    }, [id, token]);

    if (!workout) {
        return <div>Loading...</div>;
      }

      
  return (
    <div className='p-4'>
      <BackTable />
      <h1 className='my-4'>show Book</h1>
      <div className='border border-2 rounded rounded-x1 p-4'>
     

        <div className='my-4'>
            <span className='border p-1 rounded mx-2'>Id</span>
            <span>{workout._id}</span>
        </div>
        
        <div className='my-4'>
            <span className='border p-1 rounded mx-2'>Excersize</span>
            <span>{workout.excersize}</span>
        </div>
        
        <div className='my-4'>
            <span className='border p-1 rounded mx-2'>Load</span>
            <span>{workout.load}</span>
        </div>
        
        <div className='my-4'>
            <span className='border p-1 rounded mx-2'>Reps</span>
            <span>{workout.reps}</span>
        </div>
        
        <div className='my-4'>
            <span className='border p-1 rounded mx-2'>Create Time</span>
            <span>{new Date(workout.createdAt).toString()}</span>
        </div>
        
        <div className='my-4'>
            <span className='border p-1 rounded mx-2'>Last Update Time</span>
            <span>{new Date(workout.updatedAt).toString()}</span>
        </div>



      </div>
    </div>
  )
}

export default ShowBook




