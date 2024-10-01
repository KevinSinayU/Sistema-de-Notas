package com.notes.notesApp.services;

import com.notes.notesApp.entities.Note;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface NoteService {
    List<Note> findNotes();
    Note findNoteById(Long id);
    List<Note> findActiveNotes();
    List<Note> findArchivedNotes();
    List<Note> findNotesByCategory(String category);
    Note createNote(Note note);
    Note updateNote(Long id,Note note);
    void deleteNote(Long id);



}
