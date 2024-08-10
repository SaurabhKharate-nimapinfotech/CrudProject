import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3030/users/'+id)
        .then(res=>{
             setData(res.data)
        }).catch(err=>{
            console.log(err)
        })

    },[])

    const handleSubmit = (event) =>{
       event.preventDefault()
       axios.put('http://localhost:3030/users/'+id, data)
       .then(res=>{
         alert("Data Update Successfuly")
          navigate('/')
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
            value={data.id}
            disabled
           
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={e=>setData({...data,name:e.target.value})}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={e=>setData({...data,email:e.target.value})}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
        </div>
    )
}

export default Update
