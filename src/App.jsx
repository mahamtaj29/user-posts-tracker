import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserList} from './components/UserList';
import { UserDetail } from './components/UserDetail';
import { UserToDos } from './components/UserToDos';
import { NavBar } from './components/NavBar';

function App() {
return (
  <div className='App'>
    
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:userId" element={<UserDetail />} />
      <Route path="/posts/:userId" element={<UserDetail />} />
      <Route path="/todos/:userId" element={<UserToDos />} />
    </Routes>
    </Router>
    </div>
);
}
export default App;