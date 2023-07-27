import { ButtonHeader } from "./style";



export function Button ({text, width, height, marginTop, backgroundColor}) {   
 return <ButtonHeader width={width} height={height} marginTop={marginTop} backgroundColor={backgroundColor}>{text}</ButtonHeader>
}

export default Button