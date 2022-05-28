import React, {useContext, useEffect} from 'react'
import { Context } from './index';
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from './components/NavBar/NavBar';
import './root.css';



const App = observer(() =>{
  const {visualVersion} = useContext(Context)
  useEffect(()=>{
    visualVersion.setVisualVersion(visualVersion.largeVersion)
  },[visualVersion.largeVersion])
    return (
      <BrowserRouter>  
          <NavBar />
          <AppRouter />
      </BrowserRouter>
    );
})

export default App;
