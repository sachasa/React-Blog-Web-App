import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route,Link, } from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const currentUser = false; // Assuming you have logic to determine the current user

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Home />} />
        <Route
           path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route
          exact path="/login"
          element={currentUser ? <Home/> : <Login />}
        />
        <Route exact path="/post/:postid" element={<Single />} />
        <Route
          exact path="/write"
          element={currentUser ? <Write /> : <Register />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Register/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
