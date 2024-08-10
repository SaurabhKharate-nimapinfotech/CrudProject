import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
     const [inputData,setInputData] = useState({name:'', email:''})
     const navigate = useNavigate()

     const handleSubmit = (event) =>{
          event.preventDefault();

          axios.post('http://localhost:3030/users',inputData)
          .then(res=>{
            alert("Data Added Successfuly");
            navigate('/');
          }).catch(err=>{
            console.log(err)
          })
     }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            id="id"
            required
            onChange={e=>setInputData({...inputData, id:e.target.value})}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            required
            onChange={e=>setInputData({...inputData, name:e.target.value})}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            required
            onChange={e=>setInputData({...inputData, email:e.target.value})}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
        </div>
    )
}

export default Add
