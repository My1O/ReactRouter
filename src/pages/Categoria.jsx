import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import { useParams, Routes, Route, Link, useResolvedPath} from 'react-router-dom'
import { buscar } from '../api/api'
import SubCategoria from './SubCategoria'



const Categoria = () => {
    
    //arreglo para usar las subcategoria
    const [subcategorias, setSubcategoria] = useState([])

    const url = useResolvedPath("").pathname
    console.log(url)
    const {id} = useParams()
    //usamos useEffect para utilizar buscar y que filtre por ID de cada categoria
    useEffect( ()=> {
        buscar(`/categorias?id=${id}`, (response) =>{
            setSubcategoria(response[0].subcategorias)
        })
    }, [id])

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element ={<ListPosts url={`/posts?categoria=${id}`}/>}/>
                <Route path='/:subcategoria' element={<SubCategoria />} />
            </Routes>
            
        </>
    )
    //filtra posts por categoria: LinkPosts
}

export default Categoria