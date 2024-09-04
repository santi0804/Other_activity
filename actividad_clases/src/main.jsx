import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './Body'
import Encabezado from './Encabezado'
import Main from './Main2'
import Sections from './Sections'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
    <Encabezado/>
    <br />
    <Main/>
    <Sections/>

  


  </StrictMode>,
)
