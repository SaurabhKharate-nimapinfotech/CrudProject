import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';



function App() {
  const [columns,setColumns] = useState([])
  const [records,setRecords] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3030/users")
    .then((res) => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
    })
  },[])



  return (
  <div>
    <div><Link to='/create'>Add +</Link></div>
      <table className='table'>
       <thead>
           <tr>
            {
              columns.map((c,i)=>(
                <th key={i}> {c} </th>
              ))
            }
             <tr> Action </tr>
           </tr>
       </thead>
      
       <tbody>
         {
          records.map((d,i)=>(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                {/* <Link to={`/update/${d.id}`}>Update</Link> */}
                <button onClick={()=>navigate(`/update/${d.id}`)}>Update</button>
                {/* <Link to='/delete'>Delete</Link> */}
                <button onClick={()=>navigate(`/delete/${d.id}`)}>Delete</button>
              </td>
            </tr>
          ))
         }
       </tbody>
      </table>
      </div>
  )
}

export default App
