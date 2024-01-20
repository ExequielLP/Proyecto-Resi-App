import React, { useContext, useEffect } from 'react'
import ContextoAdministrador from './../contexto/ContextoAdmin';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const { usuarios } = useContext(ContextoAdministrador)


  useEffect(() => {
    document.title = 'Inicio'

  }, [])



  return (

    <>
      <div>inicio</div>

      {usuarios != null && <Link className='btn btn-primary ms-3' to={'/admin'}  > Ir admin</Link>}

      {usuarios == null && <Link className='btn btn-primary ms-3' to={'/login'}  >login o registrarse</Link>}
     



    </>
  )
}

export default Inicio