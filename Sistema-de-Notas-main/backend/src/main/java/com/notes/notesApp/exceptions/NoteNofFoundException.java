package com.notes.notesApp.exceptions;

public class NoteNofFoundException extends RuntimeException{
    public NoteNofFoundException(Long id) {
        super("Could not find the note with id"+id);
    }
}
