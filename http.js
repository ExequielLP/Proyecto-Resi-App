

export const get= async(url)=>{
    try {
        const respuesta= await fetch(url)
        
        if (!respuesta.ok) {
            throw new Error(respuesta.status+"error en fecth"+ respuesta.statusText)
        }
        const data= await respuesta.json()
    
    return data;
    
    } catch (error) {
        console.log(`error cath de get ${error}`)
    }
    
    
    }

export const post= async (url,data)=>{
    const fechConfig={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }
    // creo que lo que falta, es poner en el post, el headers:header insertando el token digamos ,pero en la parte de la autorizacion del la peticion post
    
        try {
            const respuesta= await fetch(url,fechConfig)
            
            if (!respuesta.ok) {
                throw new Error(respuesta.status+"error en fecth [post hhtp]"+ respuesta.statusText)
            }
            const datos= await respuesta.json()
        
        return datos;
        
        } catch (error) {
            console.log(`error cath de get [POST HTTPS]${error}`)
        }
    }

    export const getToken= async (url,token)=>{
        console.log("este es el GETTOKEN linea 45 a ver si llega el token")
        console.log(token)
        const fechConfig={
            method:"GET"          
        , headers: {
            "Authorization":`Bearer ${token}`
        }
        }
        // llego TOKEN VACIO, POR QUE

        
            try {
                const respuesta= await fetch(url,fechConfig)
                
                if (!respuesta.ok) {
                    throw new Error(respuesta.status+"error en fecth [linea 58]"+ respuesta.statusText)
                }
                const datos= await respuesta.json()
            
            return datos;
            
            } catch (error) {
                console.log(`error cath de get [POST HTTPS]${error}`)
            }
        }