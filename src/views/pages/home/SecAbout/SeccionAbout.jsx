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
                    <h4>AL SERVICIO DE TU SONRISA</h4>
                    <h2>Somos <br /> DenCare Perú</h2>
                </Encabezado>
                <p>Brindamos a nuestros pacientes la mejor experiencia dental con un servicio integral con 
                    múltiples alternativas de tratamiento, enfocado a sus necesidades, expectativas y posibilidades,
                     con un excelente equipo humano y profesional, con una excelencia en la calidad y tecnología de
                      última generación, a valores accesibles con un alto énfasis en la prevención y salud bucal.
                </p>
                <p>¿Por qué elegirnos? Creemos que para agregar valor a nuestros servicios es necesario poseer una visión
                     profesional que nos permita capturar la sensibilidad de nuestros pacientes y construir relaciones
                     permanentes y confiables, con cada uno de ellos.
                </p>
                <Boton>
                    LEER MAS
                </Boton>
            </AboutContainer>
        </Limit>
     );
}
 
export default SeccionAbout;