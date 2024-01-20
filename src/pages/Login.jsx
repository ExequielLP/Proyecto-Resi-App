import React, { useContext, useEffect, useState } from 'react'
import { post } from '../../http'
import { Link } from 'react-router-dom';
import ContextoAdministrador from './../contexto/ContextoAdmin';


// URL NECESARIO PARA FECTH
 const urlPOST = 'http://localhost:8080/api/v1/auth/registro'


// FORM INICIAL PARA LUEGO MANDAR AL BACK

const formIncial = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  password: "",
  domicilio: "",
  alta: true,
  rol:"USER"
}

const formInciallogin = {
  email: "",
  password: ""
}


const Login = () => {
  const {SubmitLogin,usuarios}=useContext(ContextoAdministrador)
  useEffect(() => {
    document.title = 'Usuarios'
  }, [])
  //form y use State para form
  const [formlogin, setformlogin] = useState(formInciallogin)
  const [form, setform] = useState(formIncial)
 


 //funcion para ir actualizando el form login
 const handleChangelogin = (e) => {
  setformlogin({
    ...formlogin,
    [e.target.name]: e.target.value,

  })
  console.log(formlogin)
}



  //funcion para ir actualizando el form registro

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,

    })
    console.log(form)
  }





  // ACCCION PARA LUEGO MANDAR AL BACK EL REGISTRO
  const Submint = async (e) => {
    e.preventDefault()
   try {
   const formConRol={...form,rol: 'USER'}
    const respuestaRegistro=await post(urlPOST, formConRol);
   console.log(respuestaRegistro)
    console.log("enviandoooooooooooooooooooooooooooooooo")
   } catch (error) {
    console.log("no anda")
   }


  }

  return (
    <>
    <h1>Logearse</h1>
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChangelogin}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChangelogin}/>
  </div>
  <button  className="btn btn-primary" onClick={(e)=>SubmitLogin(e,formlogin)}>Logearse</button>
  {usuarios.length > 0 && <Link className='btn btn-primary ms-3' to={'/admin'}>Ir Admin</Link>}
</form>
    </div>

<h1>Registrarse</h1>
      <form className="row g-3" action=''>

        <div className="col">
          <label htmlFor="nombref" className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='nombref' name='nombre' onChange={handleChange} />
        </div>
        <div className="col">
          <label htmlFor="" className="form-label">Apellido</label>
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" name='apellido' onChange={handleChange} />
        </div>
        <div className="col">
          <label htmlFor="direccionf" className="form-label">Address</label>
          <input type="text" className="form-control" id="direccionf" placeholder="1234 Main St" name='domicilio' onChange={handleChange} />
        </div>


        <div className="col">
          <label htmlFor="inputEmail4f" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4f" name='email' onChange={handleChange} />
        </div>
        <div className="col">
          <label htmlFor="telefonof" className="form-label">Telefono</label>
          <input type="number" className="form-control" id="telefono" placeholder="1234 Main St" name='telefono' onChange={handleChange} />
        </div>
        <div className="col">
          <label htmlFor="inputPassword4w" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" name='password' onChange={handleChange} />
        </div>



        <div className="col-12">
        <button className="btn btn-primary " onClick={(e)=>{Submint(e)}} >Enviar</button>
        <Link className='btn btn-primary ms-3' to={'/'}  > Ir Inicio</Link>
        <Link className='btn btn-primary ms-3' to={'/admin'}  > Volver</Link>

        </div>
      </form>
      
    </>
  )
}

export default Login