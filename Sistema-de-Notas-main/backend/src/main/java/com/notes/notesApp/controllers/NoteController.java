package com.notes.notesApp.controllers;

import com.notes.notesApp.entities.Note;
import com.notes.notesApp.services.NoteServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class NoteController {

    @Autowired
    private NoteServiceImplementation noteServiceImplementation;

    @GetMapping("/notes")
    public List<Note> getAllNotes(){
        return noteServiceImplementation.findNotes();
    }
    @GetMapping("/notes/{id}")
    public Note getNoteById(@PathVariable Long id){
        return noteServiceImplementation.findNoteById(id);
    }
    @GetMapping("/notes/active")
    public List<Note> getActiveNotes(){
        return noteServiceImplementation.findActiveNotes();
    }
    @GetMapping("/notes/archived")
    public List<Note> getArchivedNotes(){
        return noteServiceImplementation.findArchivedNotes();
    }
    @GetMapping("/notes/category/{category}")
    public List<Note> getNotesByCategory(@PathVariable String category){
        return noteServiceImplementation.findNotesByCategory(category);
    }
    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note){
        return noteServiceImplementation.createNote(note);
    }
    @PutMapping("/notes/{id}")
    public Note updateNote(@RequestBody Note note,@PathVariable Long id){
        return  noteServiceImplementation.updateNote(id,note);
    }
    @DeleteMapping("/notes/{id}")
    public void deleteNote(@PathVariable Long id){
        noteServiceImplementation.deleteNote(id);
    }


}
