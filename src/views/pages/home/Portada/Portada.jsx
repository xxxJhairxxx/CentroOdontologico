import { Limit } from "../../../../components/Limit"
import { TextoPortada } from "./Styled-components/TextoPortada";
import { ThumbPortada } from "./Styled-components/ThumbPortada";
import { PortadaContainer } from "./Styled-components/PortadaContainer";
import { Imagen } from "./Styled-components/Imagen";
import { Boton } from "../../../../components/Boton";

import portada from '../../../../assets/Images/portada.png'
const Portada = () => {
    return ( 
            <PortadaContainer>
            <Limit>
                <TextoPortada>
                    <h3>BIENVENIDOS A DECARE</h3>
                    <h1>Trabajamos por tu sonrisa</h1>
                    <p> Resolveremos todos sus problemas dentales en Diseño
                        de sonrisa, Blanqueamiento Dental, Carillas, 
                        Implantes, Ortodoncia, endodoncia con la mejor 
                        tecnología y la calidad que nos caracteriza. Contamos
                        con Tecnología Láser</p>
                    

                    <Boton>AGENDAR CITA</Boton> 
                </TextoPortada>
                <ThumbPortada>
                    <Imagen src={portada} />
                </ThumbPortada>
            </Limit>
            </PortadaContainer> );
}
 
export default Portada ;