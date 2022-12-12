import styled from "styled-components"
import image3 from "../Images/vegetables.jpeg"
const Container=styled.div``
const ImgContainer=styled.div``
const Img=styled.img``
const Description=styled.p``
const Time=styled.p``


const Categories=()=>{
    return(
        <>
        <Container>
            <ImgContainer>
            <Img src="image3"/>
            <Description>Grilled Chicken salad with veggies</Description>
            <Time></Time>
            </ImgContainer>
        </Container>
        </>
    )
}
export default Categories