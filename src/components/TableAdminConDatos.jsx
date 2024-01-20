import React from 'react'

const TableAdminConDatos = ({ usuariosDB }) => {
    return (
        <tr>
            <td>{usuariosDB.nombre}</td>
            <td>{usuariosDB.apellido}</td>
            <td>{usuariosDB.email}</td>
            <td>{usuariosDB.telefono}</td>
            <td>{usuariosDB.domicilio}</td>
        </tr>
    )
}

export default TableAdminConDatos