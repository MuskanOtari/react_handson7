import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';import {StudentUpdated} from '../Feature/StudentSlice'
const EditDetails = () => {
const dispatch =useDispatch();
const navigate =useNavigate();
const data = useLocation();
const dataid = data.state.id;
const StdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid));
const stdName=StdDetail[0].Name
const stdAge=StdDetail[0].Age
const stdCourse =StdDetail[0].Course
const stdBatch= StdDetail[0].Batch

const [Name,setName]=useState(stdName);
const [Age,setAge]=useState(stdAge);
const [Course,setCourse]=useState(stdCourse);
const [Batch,setBatch]=useState(stdBatch);

const SubmitHandler=()=>{
  if(Name && Age && Course && Batch){
    dispatch(StudentUpdated({
      "id":dataid,
      "Name":Name,
      "Age":Age,
      "Course":Course,
      "Batch":Batch
    }))
    navigate('/Students')
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

            <div className='box2'>
              <button className='btn2' onClick={SubmitHandler}>Update</button></div>
             </div>
    
    </>
  )
}

export default EditDetails