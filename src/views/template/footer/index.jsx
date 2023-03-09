import { ContactBottom } from "./style-components/ContactBottom";
import { ContactBottomItem } from "./style-components/ContactBottomItem";
import { DescriptionFooter } from "./style-components/DescriptionFooter";
import { EnlacesBottom } from "./style-components/EnlacesBottom";
import { FooterContainer } from "./style-components/FooterContainer";
import { Horario } from "./style-components/Horario";
import {HorarioBottom} from "./style-components/HorarioBottom";
import {Logo} from "./style-components/Logo"
import { ServicesBottom } from "./style-components/ServicesBottom";
import {Thumb} from "./style-components/Thumb"
import { ThumbIcon } from "./style-components/ThumbIcon";
import { Limit } from "../../../components/Limit"
import { Link } from "react-router-dom";
import { ThumbRedes } from "./style-components/ThumbRedes";
import { Copyright } from "./style-components/Copyright";
import { CopyRedes } from "./style-components/CopyRedes";


import "./style.css"
import logo from "../../../assets/Images/f_logo.png"

const Footer = () => {
    return ( 
    <>
        <FooterContainer>
            <Limit>
            <DescriptionFooter>
                <Thumb>
                    <Logo src={logo}></Logo>
                </Thumb>
                <p style={{'marginTop':'10px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nobis cumque ab, laudantium
                     facere voluptas quisquam ducimus et aperiam quaerat possimus alias eligendi molestias animi 
                     hic, tempora iusto repudiandae quo.
                </p>
                <HorarioBottom>
                    <ThumbIcon>
                            <i className="bi bi-alarm"></i>
                    </ThumbIcon>

                    <Horario>
                        <p>Lunes - Sábados</p>
                        <p>9:00am - 10:00pm</p>
                    </Horario>

                </HorarioBottom>
                
            </DescriptionFooter>

            <EnlacesBottom>
                    <h2>Enlaces</h2>
                    
                        <Link className="enlace"> Home </Link>
                        <Link className="enlace"> About </Link>
                        <Link className="enlace"> Servicio </Link>
                        <Link className="enlace"> Especialidades </Link>
                        <Link className="enlace"> Sedes </Link>
                        <Link className="enlace"> Blog </Link>
                        <Link className="enlace"> Citas en Linea </Link>
                    
            </EnlacesBottom>

            <ServicesBottom>
                    <h2>Servicios</h2>

                    <ul>
                        <li>Root Canal</li>
                        <li>Root Canal</li>
                        <li>Root Canal</li>
                        <li>Root Canal</li>
                        <li>Root Canal</li>
                        <li>Root Canal</li>
                    </ul>
            </ServicesBottom>
            <ContactBottom>
                    <h2>Contactanos</h2>

                    <ContactBottomItem>
                        <ThumbIcon>
                            <i className="bi bi-geo-alt"></i>                            
                        </ThumbIcon>
                        <p>1247/Plot No.39, 15th
                            Phase, LHB Colony, Kanpur
                        </p>
                    </ContactBottomItem>
                    <ContactBottomItem>
                        <ThumbIcon>
                            <i className="bi bi-telephone"></i>                            
                        </ThumbIcon>
                        <p>1800-121-3637 <br />
                            +91-7052-101-786
                        </p>
                    </ContactBottomItem>
                    <ContactBottomItem>
                        <ThumbIcon>
                            <i className="bi bi-envelope"></i>                            
                        </ThumbIcon>
                        <p>
                            info@example.com <br />
                            help@example.com <br />
                        </p>
                    </ContactBottomItem>
            </ContactBottom>
            </Limit>
            
            
        </FooterContainer>
        <Copyright>
            <Limit align="center">
                <p>Copyright © 2022 decare. All rights reserved.</p>
                <CopyRedes>
                    <ThumbRedes><i className="bi bi-facebook"></i></ThumbRedes>
                    <ThumbRedes><i className="bi bi-instagram"></i></ThumbRedes>
                    <ThumbRedes><i className="bi bi-twitter"></i></ThumbRedes>
                </CopyRedes>
            </Limit>
        </Copyright>
    </>
     );
}
 
export default Footer;