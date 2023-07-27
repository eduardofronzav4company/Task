import { ContaienrBackground } from "./style"


function BackgroundWithImage({children, imageBackground, altura}) {
    return(
        <>
            <ContaienrBackground imgUrl={imageBackground} height={altura} >
                {children}
            </ContaienrBackground>
        </>
    )
}

export default BackgroundWithImage