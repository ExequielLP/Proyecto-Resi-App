import React, { createContext, useEffect, useState } from 'react'
import { post, getToken } from './../../http';
const ContextoAdministrador = createContext()
const urlLista = 'http://localhost:8080/api/v1/auth/clientes'
const urlPostLogin = 'http://localhost:8080/api/v1/auth/autheticate'

const usuarioContext = {
    nombre: "",
    token: ""
}



const ContextoAdmin = ({ children }) => {
    const [usuarios, setusuarios] = useState(usuarioContext)
    const [usuariosDB, setusuariosDB] = useState([])

    useEffect(() => {
        ListaClientes()
    }
        , [usuarios])


    // ACCION PARA LOGUEARSE Y RECIBIR EL
    const SubmitLogin = async (e, formlogin) => {
        e.preventDefault()
        console.log(formlogin)


        try {

            const respuesta = await post(urlPostLogin, formlogin)
            const usuarioRespuesta = {
                nombre: respuesta.nombre,
                token: respuesta.token
            }
            setusuarios(usuarioRespuesta)
            window.localStorage.setItem("auth_token", respuesta.token)

            // por que no anda si en teoria lo estoy seteando ? console.log(token)


        } catch (error) {
            console.log("No existe ese usuario maquina")
            console.warn("NO EXISTO ESO")
        }




    }

    const ListaClientes = async () => {

        // exe aca necesitas hacer un put con el token que ya seteeaste arriba linea 26 de ContextoAdmin,el put tiene que tener incorporacion del headers:autorizacion etc (ver videos youtubr)
        try {

            const respuesta = await getToken(urlLista, usuarios.token)
            console.log('estos son los usuarios')
            console.log(respuesta)
            setusuariosDB(respuesta)
            console.log("asi deberia quedar el usuarioDB useStade")
            console.log(usuariosDB)
            return respuesta
        } catch (error) {
            console.error('Erro en el metodo get ')
        }

    }

    const data = { usuarios, SubmitLogin, usuariosDB }

    return <ContextoAdministrador.Provider value={data} >{children}</ContextoAdministrador.Provider>


}

export { ContextoAdmin }
export default ContextoAdministrador