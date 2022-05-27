import { observer } from "mobx-react-lite";
import {Routes, Route, Navigate,} from 'react-router-dom' // Routes это заменя для Switch, который был в пятой версси и ниже. Redirect тоже нет в 6 ррд. вместо него используется Конструкция №1
import { routes } from "../routes";

const AppRouter = observer(() => {
    
    return (
    <Routes>
        {routes.map(({path, Component})=><Route key={path} path={path} element={<Component />}  />)} 
        <Route path="*" element={<Navigate to='/' />} />
        {/* Конструкция №1 (вместо редиректа) */}
    </Routes>
    ) 
   
})

export default AppRouter;