import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './Body'
import Encabezado from './Encabezado'
import Main from './Main2'
import Sections from './Sections'
import Article from './Article'
import Footer from './Footer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
    <Encabezado/>
    <br />
    <Main/>
    <Sections/>
    <Article/>
    <br/>
    <Footer/>

  </StrictMode>
)
