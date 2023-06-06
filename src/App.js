import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre"
import Page404 from './pages/page404';
import Header from './components/Header';

//importar react router de react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  //muestra ubicacion del componente
  const location = window.location.pathname
  console.log(location)


  return (
    //Ocupamos Libreria Router, display menu on Components 
    //se define ruta en route

    // route path= /fileName and elements should be html format ex= <Abous us />
    // Dentro de <Router> se comparte componentes globales, menu on all pages
    <Router>
      <Header />
     <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/sobre' element = {<Sobre />} />
        <Route path='*' element={<Page404 />}/>
     </Routes>
    </Router>
  );
}

export default App;
