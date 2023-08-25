import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CreateResume from './pages/createresume/CreateResume';
import ErrorPage from './pages/errorpage/ErrorPage';
import HomePage from './pages/homepage/HomePage';
import Resume from './pages/yourresume/Resume';
import ViewResume from './pages/viewresume/ViewResume';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-resume' element={<CreateResume />} />
        <Route path='/view-resume' element={<ViewResume />} />
        <Route path='/your-resume/:id' element={<Resume />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
