package com.notes.notesApp.services;

import com.notes.notesApp.entities.Note;
import com.notes.notesApp.exceptions.NoteNofFoundException;
import com.notes.notesApp.repositories.NoteRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class NoteServiceImplementation implements NoteService {
    @Autowired
    private NoteRepositoy noteRepositoy;

    @Override
    public List<Note> findNotes() {
        return noteRepositoy.findAll();
    }

    @Override
    public Note findNoteById(Long id) {
        return noteRepositoy.findById(id)
                            .orElseThrow(()->new NoteNofFoundException(id));
    }

    @Override
    public List<Note> findActiveNotes() {
        List<Note> allNotes = findNotes();
        List<Note> activeNotes = new ArrayList<>();
        for(Note n : allNotes){
            if(n.getActive().equals("active")){
                activeNotes.add(n);
            }
        }
        return activeNotes;
    }

    @Override
    public List<Note> findArchivedNotes() {
        List<Note> allNotes = findNotes();
        List<Note> archivedNotes = new ArrayList<>();
        for(Note n : allNotes){
            if(!n.getActive().equals("active")){
                archivedNotes.add(n);
            }
        }
        return archivedNotes;
    }

    @Override
    public List<Note> findNotesByCategory(String category) {
        List<Note> allNotes = findNotes();
        List<Note> categoryNotes = new ArrayList<>();
        for(Note n : allNotes){
            if(n.getCategory().equals(category)){
                categoryNotes.add(n);
            }
        }
        return categoryNotes;
    }

    @Override
    public Note createNote(Note note) {
        return noteRepositoy.save(note);
    }

    @Override
    public Note updateNote(Long id, Note updatedNote) {
        return noteRepositoy.findById(id).map(note-> {

            note.setTitle(updatedNote.getTitle());
            note.setDescription(updatedNote.getDescription());
            note.setCategory(updatedNote.getCategory());
            note.setActive(updatedNote.getActive());
            return noteRepositoy.save(note);
        }).orElseThrow(()->new NoteNofFoundException(id));
    }

    @Override
    public void deleteNote(Long id) {
        if(!noteRepositoy.existsById(id)){
            throw new NoteNofFoundException(id);
        }
        noteRepositoy.deleteById(id);
    }
}
