import Portada from "./Portada/Portada"
import SeccionServicios from "./SecServicios/SeccionServicios";
import SeccionAbout from "./SecAbout/SeccionAbout";
import SeccionReserva from "./SecReserva/SeccionReserva";
const Home = () => {
    return (  
        <>
            <Portada />
            <SeccionServicios />
            <SeccionReserva />
            <SeccionAbout />
        </>
    );

}
 
export default Home;