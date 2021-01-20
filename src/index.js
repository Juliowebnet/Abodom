import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './css/mystyles.scss'
//libreria pra traducir
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
//archivos con las traducciones
import global_es from './translation/es/global.json';
import global_en from './translation/en/global.json';

//importamos el icono del sitio
import Favicon from 'react-favicon';
import faviconIcon from './favicon.ico'

i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources: {
        es:{
            global: global_es
        },
        en:{
            global: global_en
        }

    }
})

ReactDOM.render(
    <div>
        <Favicon url={faviconIcon}/>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </div>, document.getElementById('root'))