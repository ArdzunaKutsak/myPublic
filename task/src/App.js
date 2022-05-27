import React from 'react'
import {getUsers} from './http/userAPI'
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from './components/NavBar/NavBar';
import './root.css'

function App() {
  getUsers()
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
