
import { Route,Routes } from 'react-router-dom'
import Home from '../views/pages/home'
import About from '../views/pages/about'

const Router = () => {
    return ( 
        <Routes>            
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
     );
}
 
export default Router;