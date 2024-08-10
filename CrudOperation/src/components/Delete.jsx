import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {useState} from "react"
import axios from "axios"
function Delete() {
  const {id}= useParams()
    const navigate = useNavigate()

    const handleClick = () =>{
      
          axios.delete("http://localhost:3030/users/"+ id)
          .then(e=>{
            navigate('/')
          }).catch(err=>{
            console.log(err)
          })
        
    }
    return (
        <>
          <h1>Do you want to delete</h1>   
          <button onClick={handleClick}>Delete</button> 
          <button onClick={()=>navigate("/")}>Cancel</button> 
        </>
    )
}

export default Delete
