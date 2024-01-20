import React from 'react'
import TableAdminConDatos from './TableAdminConDatos'
import { Link } from 'react-router-dom'

const TableAdmin = ({ usuariosDB }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">email</th>
            <th scope="col">telefono</th>
            <th scope="col">Localidad</th>
          </tr>
        </thead>
        <tbody>
          {usuariosDB && usuariosDB.map((e) => (
            <TableAdminConDatos  usuariosDB={e} key={e.id} />
          )
          )}
        </tbody>
      </table>
    </div>
  )

}

export default TableAdmin

