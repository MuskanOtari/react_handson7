import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {studentAdded} from '../Feature/StudentSlice';
import {useDispatch, useSelector} from 'react-redux';

const AddNewStudents = () => {
  const data= useSelector((state)=>state.student);  
  const [Name,setName]=useState("");
   const [Age,setAge]=useState("");
   const [Course,setCourse]=useState("");
   const [Batch,setBatch]=useState("");
   const navigate =useNavigate();
   const dispatch =useDispatch();

   const cancelAddStudent=()=>{
    navigate("/Students");
   }

   const SubmitNewStudent=()=>{
    if(Name && Age && Course && Batch){
      dispatch(studentAdded({
        "id":data.length,
        "Name":Name,
        "Age" :Age,
        "Course":Course,
        "Batch": Batch

      }))
    }
   }
  return (
    <>
    <div className='box'>
    <div className="f1">
            <label>Name : </label><br></br>
            <input type='text' name='name' placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)}/><br></br>
            </div>
            
            <div className="f1">
            <label>Age : </label><br></br>
            <input type='text' name='age' placeholder='Age' value={Age} onChange={(e)=>setAge(e.target.value)}/><br></br>
            </div>

            <div className="f1">
            <label>Course : </label><br></br>
            <input type='text' name='course' placeholder='course' value={Course} onChange={(e)=>setCourse(e.target.value)}/><br></br>
            </div>
            
            <div className="f1">
            <label>Batch : </label><br></br>
            <input type='text' name='batch' placeholder='batch' value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
            </div>
    </div>
    <div className="box2">
      <button className='butn2' onClick={cancelAddStudent}>Cancle</button>
      <button className='butn2' onClick={SubmitNewStudent}>Submit</button>
    </div>
    </>
  )
}

export default AddNewStudents