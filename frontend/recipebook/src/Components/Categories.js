import styled from "styled-components"
import image3 from "../Images/vegetables.jpeg"
const Container=styled.div``
const ImgContainer=styled.div``
const Image=styled.img``
const Description=styled.p``
const Time=styled.p``
const Para=styled.p``


const Categories=({recipe})=>{
    return(
        <>
        <Container>
            {recipe && recipe.map(recipeData=>{
                return(
            <ImgContainer>
            <Image src={recipeData.image}/>
            <Para>{recipeData.name}</Para>
            <Para>{recipeData.ingredients}</Para>
            <Description>{recipeData.instructions}</Description>
            <Time>{recipeData.cookTime}</Time>
            
            </ImgContainer>
            )
            })}
        </Container>
        </>
    )
}
export default Categories