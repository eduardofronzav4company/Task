import { ButtonHeader } from "./style";


export function Button ({text, width, height, marginTop, backgroundColor, border, color, fontWeight}) {   
 return <ButtonHeader width={width} height={height} marginTop={marginTop} backgroundColor={backgroundColor} border={border} color={color}fontWeight={fontWeight} onClick={() => {alert("funcionando")}}>{text}</ButtonHeader>
}

export default Button