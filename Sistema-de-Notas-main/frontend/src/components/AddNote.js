import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AddNote = () => {

    let navigate=useNavigate()

    const [note,setNote]=useState({
        title:"",
        description:"",
        category:"other",
        active:"active"
    })
    const {title,description,category,active}=note

    const onInputChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/notes",note);
        navigate("/")
    }
  return (
    <div className='formContainer'>
        <h2>ADD NOTE</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
            <label htmlFor="title">TITLE</label>
            <input type="text" placeholder="Note Title" name='title' value={title} onChange={(e)=>onInputChange(e)} required></input>
            
            <label htmlFor="description">DESCRIPTION</label>
            <textarea id="description" placeholder="Note description" cols="30" rows="10"  maxLength="250"  name='description' value={description} onChange={(e)=>onInputChange(e)} required></textarea>
            
            <label htmlFor="category" >CATEGORY</label>
            <select name='category' value={category} onChange={(e)=>onInputChange(e)} required>
              <option value="other">OTHER</option>
              <option value="work">WORK</option>
              <option value="study">STUDY</option>
              <option value="personal">PERSONAL</option>
              <option value="social">SOCIAL</option>
              <option value="finance">FINANCE</option>
            </select>
    
            <label htmlFor="active" >CATEGORY</label>
            <select name='active' value={active} onChange={(e)=>onInputChange(e)} required>
                <option value="active">ACTIVE</option>
                <option value="archived">ARCHIVED</option>
            </select>
    
            <div className="footer">
                <Link to='/' className="btn btn-secondary button " >Close</Link>
                <button type="submit" className="btn btn-primary button submitButton">Add Note</button>
            </div>
        </form>
    </div>
  )
}
