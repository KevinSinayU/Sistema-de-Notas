package com.notes.notesApp.repositories;

import com.notes.notesApp.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepositoy extends JpaRepository<Note,Long> {

}
