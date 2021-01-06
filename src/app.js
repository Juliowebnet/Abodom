//Dependencias
import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

//páginas
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';

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
                    <Header></Header>
                    <h1>Página de las sucursales</h1>
                </Route>
                <Route path="/productos">
                    <Header></Header>
                    <h1>Página del catálogo</h1>
                </Route>
                <Route path="/nosotros">
                    <Header></Header>
                    <h1>Página de nosotros</h1>
                </Route>
                <Route path="/">
                    <Inicio/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;