import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './css/mystyles.scss'

//importamos el icono del sitio
import Favicon from 'react-favicon';
import faviconIcon from './favicon.ico'

ReactDOM.render(
    <div>
        <Favicon url={faviconIcon}/>
        <App/>
    </div>, document.getElementById('root'))