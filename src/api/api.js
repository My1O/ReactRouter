import axios from "axios";

export const api = axios.create ({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    //
    const respuesta = await api.get(url)
    //l ainformacion obtenida se agrega a setData. si es ./sobre. agrega http://localhost:5000/sobre
    
    setData(respuesta.data)
}