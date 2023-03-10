import { Limit } from "../../../../components/Limit";
import { Boton } from "../../../../components/Boton";
import { Encabezado } from "../../../../components/Encabezado";
import { AboutContainer } from "./Styled-components/AboutContainer";
import { Thumb } from "./Styled-components/Thumb";


import about from "../../../../assets/Images/about_img.png"

const SeccionAbout = () => {
    return ( 
        <Limit mt>
            <Thumb>
                <img src={about} alt="" />
            </Thumb>
            <AboutContainer>
                <Encabezado start>
                    <h4>Sobre Nosotros</h4>
                    <h2>Nos Dedicamos a Tu Salud Dental</h2>
                </Encabezado>
                <p>Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, 
                    sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, 
                    cursus sed nisl tristique, commodo vehicula arcu.
                </p>
                <p>Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere
                     sapien. Morbi a dignissim enim. Fusce elementum, augue in elementum porta, sapien nunc
                      volutpat ex, a accumsan nunc lectus eu lectus.</p>
                <Boton>
                    LEER MAS
                </Boton>
            </AboutContainer>
        </Limit>
     );
}
 
export default SeccionAbout;