import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from '../Components/TableRow';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const navigate = useNavigate();
  const data = useSelector((state)=>state.student);
const AddNewStudent=()=>{
navigate('/AddNewStudent')
}

  return (
    
    <>
    <header className='header'>
    <h3>Students details </h3>
    <button className='butn' onClick={AddNewStudent}>Add New Student</button>
    </header >
    <table>
      <thead>
        <tr>
          <td className='algn'>Name</td>
          <td className='algn'>Id</td>
          <td className='algn'>Age</td>
          <td className='algn'>Coures</td>
          <td className='algn'>Batch</td>
          <td className='algn'>Change</td>
        </tr>
      </thead>
      <tbody>
        {data.map((student)=>{
          return(
          <tr key={student.id}>
            <TableRow student={student}>
              </TableRow>
          </tr>)
        })}
      </tbody>
    </table>
    </>
  )
}

export default Students