import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export const NoteList = () => {

    const [notes, setNotes]=useState([])
    
    const{id}=useParams
    useEffect(()=>{
        loadNotes();
    },[])

    const loadNotes = async()=>{
        const result =await axios.get("http://localhost:8080/api/notes")
        setNotes(result.data)
    }

    const deleteNote=async(id)=>{
        await axios.delete(`http://localhost:8080/api/notes/${id}`)
        loadNotes()
    }
  return (
    <article>
            <section className="noteContainer">
            {
                    notes.map(
                        note =>
                        <div className='note' key={note.id}>
                            <div className='categoryAndConfig'>
                                <h4 className={note.category}>{note.category}</h4>
                                <div>
                                <button className="bi bi-trash3-fill" onClick={()=>deleteNote(note.id)}></button>
                                <Link to={`/editnote/${note.id}`} className="bi bi-pencil-square"></Link>
                                </div>
                            </div>
                            <div><h3>{note.title}</h3></div>
                            <div><p className='noteDescription'>{note.description}</p></div>
                        </div>
                    )
                }
            </section>
            <Link to="/addnote" type="button" className="bi bi-plus-circle-fill addNote" ></Link> 
        </article>
  )
}
