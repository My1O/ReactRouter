import { useState, useEffect} from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

const Post = ({url}) => {
    // objeto vacio inicialmente
    const [post, setPost] = useState({})
    //navigate to a specific route
    const navigate = useNavigate()

    const { id } = useParams()
        //buscar con prop useEffect el objeto por ID y luego setearlo para mostrar
    useEffect (() =>{
        buscar(`/posts/${id}`, setPost).catch( ()=> {
            navigate("/not-found")
        })
    }, [id])

 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post