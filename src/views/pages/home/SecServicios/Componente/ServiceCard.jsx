import styled from 'styled-components';

const ServiceCard = ({title,description,logo}) => {
    return ( 
        <ContentCard> 
            <TextCard>
                <h2>{title}</h2>
                <p>{description}</p>
            </TextCard>
            <ThumbIcon>
                <img src={logo} alt="" />
            </ThumbIcon>
        </ContentCard>         
            
     );
}
 
export default ServiceCard;


const ContentCard = styled.div`
    width: 28%;
    display: flex;
    align-items: center;
    padding: 3% 2%;
    text-align: end;
    color: #31173C;
    line-height: 25px;
    margin: 1% 0;
  border: 1px solid #D0D0D0;
  h2{
    font-size: 22px;
    margin-bottom: 3%;
  }
  p{
    font-size: 15px;
    color: #777;
  }
`

const ThumbIcon = styled.div`
    width:30%;
    height: 100%;
    padding-left: 4%;
    display: flex;
    align-items: flex-start;
    img{
        width: 100%;
    }
`
const TextCard =styled.div`
`