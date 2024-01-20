import React, { useContext } from 'react'
import ContextoAdministrador from './../contexto/ContextoAdmin';
import TableAdmin from './../components/TableAdmin';
import { Link } from 'react-router-dom';


//TRAIGO FUNCIONA DEL CONTEXTO

const Admin = () => {
    const {usuariosDB}=useContext(ContextoAdministrador)
  return (<>
<TableAdmin usuariosDB={usuariosDB}  />
<Link className='btn btn-primary' to={'/usuarios'}  >Usuarios</Link>
</>
  )
}

export default Admin