import { Limit } from "../../../../components/Limit"
import { Thumb } from "./Styled-components/Thumb";
import {ServicesContainer} from "./Styled-components/ServicesContainer"
import ServiceCard from "./Styled-components/ServiceCard"
import { Encabezado } from "../../../../components/Encabezado";
import services from "../../../../assets/Images/services.png"
import icon01 from "../../../../assets/Images/icon/fe-icon01.png"
const SeccionServicio = () => {
    return ( 
        <Limit>
            <Encabezado>
                <h4>Especialidades</h4>
                <h2>Servicios a Disposición</h2>
            </Encabezado>

            <ServicesContainer>
                <ServiceCard title="Root Canal" description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac." logo={icon01} />
                <ServiceCard title="Root Canal" description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac." logo={icon01} />
                <ServiceCard title="Root Canal" description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac." logo={icon01} />
                <Thumb>
                    <img src={services} />
                </Thumb>
                <ServiceCard title="Root Canal" description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac." logo={icon01} />
                <ServiceCard title="Root Canal" description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac." logo={icon01} />
                <ServiceCard title="Root Canal" description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac." logo={icon01} />
            </ServicesContainer>
            
            <div></div>

        </Limit>        
     );
}
 
export default SeccionServicio ;