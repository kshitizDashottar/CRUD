import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Codeforinterview from './components/Codeforinterview';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';

// for url based and browser routing we used a package caller browser router

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* Jin jin components  me routing chahiye usko routes se rap krdo  hum navbar hmesha chahte h upr t
        thats why usko nhi wrap krenge*/}


       
      <Routes>
        {/* to change path we use route package */}
        <Route path="/" element={<Codeforinterview /> } />
        <Route path="/all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
 

    </BrowserRouter>
  );
}

export default App;


// if we delete user and add another user the id will be incremented
// for example if i add 10 user and delete all of them and add another user the numbering will statr from 11
// this is the internal implementation of mongodb increment package.