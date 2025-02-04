

import React from 'react';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const BookTable = ({ workouts }) => {
  return (
    <table className='table table-striped text-center'>
      <thead>
        <tr>
          <th className='border'>No</th>
          <th className='border'>Excersize</th>
          <th className='border'>Load</th>
          <th className='border'>Reps</th>
          <th className='border'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout, index) => (
          <tr key={workout._id} className='h-8'>
            <td className='border'>{index + 1}</td>
            <td className='border'>{workout.excersize}</td>
            <td className='border'>{workout.load}</td>
            <td className='border'>{workout.reps}</td>
            <td className='border'>
              <div className='d-flex justify-content-center gap-3'>
                <Link to={`/workouts/delete/${workout._id}`}>
                  <MdDelete />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;




