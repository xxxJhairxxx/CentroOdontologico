import { Boton } from "../../../../components/Boton";
import { Encabezado } from "../../../../components/Encabezado";
import { Limit } from "../../../../components/Limit";
import { ReservaContainer } from "./Styled-components/ReservaContainer";
import { ReservaDetalle } from "./Styled-components/ReservaDetalle";
import { Thumb } from "./Styled-components/Thumb";
import reserva from "../../../../assets/Images/reserva.png"

const SeccionReserva = () => {
    return ( 
        <ReservaContainer>
            <Limit>
                <Thumb>
                    <img src={reserva} alt="" />
                </Thumb>
                <ReservaDetalle>
                    <Encabezado start cwhite>
                        <h4>¿Cómo podemos ayudarte?</h4>
                        <h2>Estamos preparados para recibirte</h2>
                    </Encabezado>
                    <Boton>
                        Reservar Cita
                    </Boton>
                </ReservaDetalle>
            </Limit>
        </ReservaContainer>
     );
}
 
export default SeccionReserva;