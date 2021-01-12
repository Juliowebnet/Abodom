//Dependencias
import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

//páginas
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';
import Productos from './pages/productos';
import Nosotros from './pages/nosotros';
import Sucursales from './pages/sucursales';

//componentes
import Header from './components/header';


function App(){
    return(
        <Router>
            <Switch>
                <Route path="/contacto">
                    <Contacto></Contacto>
                </Route>
                <Route path="/sucursales">
                    <Sucursales/>
                </Route>
                <Route path="/productos">
                    <Productos/>
                </Route>
                <Route path="/nosotros">
                    <Nosotros/>
                </Route>
                <Route path="/">
                    <Inicio/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;