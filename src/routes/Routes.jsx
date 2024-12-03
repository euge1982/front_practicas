import {Routes as ReactDomRoutes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Products from '../pages/Products';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import Register from '../components/register/Register';
import Dashboard from '@/pages/Dashboard';

//Rutas
function Routes(){
    return(
        <ReactDomRoutes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </ReactDomRoutes>
    )
}

export default Routes;