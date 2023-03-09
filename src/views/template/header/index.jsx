import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styled-components/HeaderContainer";
import { Navbar } from "./styled-components/Navbar";
import { Logo } from "./styled-components/Logo";
import { Thumb } from "./styled-components/Thumb";
import { Contactbar } from "./styled-components/Contactbar";
import { ContactTop } from "./styled-components/ContactTop";
import {RedesTop} from "./styled-components/RedesTop"
import { Boton } from "../../../components/Boton";
import { Limit } from "../../../components/Limit"
import { Enlaces } from "./styled-components/Enlaces";

import logo  from '../../../assets/Images/logo.png'
import "./style.css"



const Header = () => {
    return ( 
        <HeaderContainer>
            <Contactbar>
                <Limit>
                    <ContactTop>
                        <li><i className="bi bi-envelope"></i> info@example.com</li> 
                        <li><i className="bi bi-telephone"></i> 51-924-202-101</li> 
                    </ContactTop>

                    <RedesTop>
                        <li><i className="bi bi-facebook"></i> </li>
                        <li><i className="bi bi-instagram"></i> </li>
                        <li><i className="bi bi-twitter"></i> </li>
                        <li><i className="bi bi-youtube"></i> </li>
                    </RedesTop>
                </Limit>
            </Contactbar>
            
            <Navbar>
                <Thumb>
                    <Logo src={logo} />
                </Thumb>
                <Enlaces>
                    <NavLink to="/" className="enlace-black"> Home </NavLink>
                    <NavLink to="/about" className="enlace-black"> About </NavLink>
                    <NavLink to="/servicios" className="enlace-black"> Servicios </NavLink>
                    <NavLink to="/blog" className="enlace-black"> Blog </NavLink>
                    <NavLink to="/sedes" className="enlace-black"> Sedes </NavLink>
                </Enlaces>
                <Boton>AGENDAR CITA</Boton>
            </Navbar>
        </HeaderContainer>
     );
}

export default Header;