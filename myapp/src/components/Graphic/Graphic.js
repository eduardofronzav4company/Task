import { ContainerGrpahic, ImageGraphic, TextGraphic} from './style'
import fundoLebes from '../../assets/fundoLebes.png'
import fundoLugano from '../../assets/fundoLugano.png'
import Button from '../Button/Button'
import ItemGraphic from './ItemGraphic/ItemGraphic'

function Graphic() {
    return (
        <>
            <ContainerGrpahic>
                <ImageGraphic>
                    <img src={fundoLebes} />
                </ImageGraphic>

                <TextGraphic>
                    <ItemGraphic title={"User Experience"} textPorcent={"42%"} Porcent={"42%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"78%"} Porcent={"78%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"59%"} Porcent={"59%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"97%"} Porcent={"97%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"91%"} Porcent={"91%"}/>
                    
                    <Button  text={"CONHEÇA O CASE"}  width={"200px"} height={"42px"} marginTop={"50px"}/>
                </TextGraphic>
            </ContainerGrpahic>

            <ContainerGrpahic>
                <TextGraphic>
                    <ItemGraphic title={"User Experience"} textPorcent={"42%"} Porcent={"42%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"78%"} Porcent={"78%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"59%"} Porcent={"59%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"97%"} Porcent={"97%"}/>
                    <ItemGraphic title={"User Experience"} textPorcent={"91%"} Porcent={"91%"}/>
                    
                    <Button  text={"CONHEÇA O CASE"}  width={"200px"} height={"42px"} marginTop={"50px"}/>
                </TextGraphic>

                <ImageGraphic>
                    <img src={fundoLugano} />
                </ImageGraphic>
            </ContainerGrpahic>
        </>
    )
}

export default Graphic