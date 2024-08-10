import axios from 'axios';
import React, { useState } from 'react'

function Add() {
    const [inputData,setInputData] = useState({name:'', email:''})

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/users',inputData)
        .then((res)=>{
            alert("Data Added Successfuly");
            navigate('/');
          }).catch(err=>{
            console.log(err)
          })
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <lable>ID :</lable>
                <input 
                type="text" 
                id="id"
                onChange={e=>setInputData({...inputData, id:e.target.value})}
                />
                </div>
                <div>
                 <lable>Name :</lable>
                <input 
                type="text" 
                id="id"
                onChange={e=>setInputData({...inputData, name:e.target.value})}
                />
                </div>
                <div>
                 <lable>Email :</lable>
                <input 
                type="text" 
                id="id"
                onChange={e=>setInputData({...inputData, email:e.target.value})}
                />
                </div>
                <div>
                    <button>Add</button> 
                </div>
            </form>
        </div>
        </>
    )
}

export default Add
