
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NoteList } from './components/NoteList';
import { AddNote } from './components/AddNote';
import { EditNote } from './components/EditNote';
import { ActiveNotes } from './components/ActiveNotes';
import { ArchivedNotes } from './components/ArchivedNotes';
import { FilterNotes } from './components/FilterNotes';
import { PersonalNotes } from './components/filters/PersonalNotes';
import { SocialNotes } from './components/filters/SocialNotes';
import { FinanceNotes } from './components/filters/FinanceNotes';
import { StudyNotes } from './components/filters/StudyNotes';
import { WorkNotes } from './components/filters/WorkNotes';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<NoteList/>}></Route>
        <Route exact path='/addnote' element={<AddNote/>}></Route>
        <Route exact path='/editnote/:id' element={<EditNote/>}></Route>
        <Route exact path='/active' element={<ActiveNotes/>}></Route>
        <Route exact path='/archived' element={<ArchivedNotes/>}></Route>
        <Route exact path='/filter/personal' element={<PersonalNotes/>}></Route>
        <Route exact path='/filter/social' element={<SocialNotes/>}></Route>
        <Route exact path='/filter/finance' element={<FinanceNotes/>}></Route>
        <Route exact path='/filter/study' element={<StudyNotes/>}></Route>
        <Route exact path='/filter/work' element={<WorkNotes/>}></Route>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
