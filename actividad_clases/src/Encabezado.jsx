import React from 'react';
import './index.css';

function Encabezado() {
  return (
    <header>
      <div className='container1'>
        <div className='encabezados'>
          <h2>caja 1</h2>
        </div>

        <div className='encabezados'>
          <h2>caja 2</h2>
        </div>

        <div className='encabezados'>
          <h2>caja 3</h2>
        </div>
      </div>

      <div className='container2'>
        <img src="/imagen.png" alt="Imagen principal" className='imagenuno' />
      </div>

    </header>
  );
}

export default Encabezado;
