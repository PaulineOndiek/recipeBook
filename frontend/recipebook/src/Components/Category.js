import styled from "styled-components"
import image1 from "../Images/recipe.avif"
const CategoryContainer=styled.div``
const Container=styled.div``
const ImageContainer=styled.div`
display:flex;
`
const Image=styled.img``
const Name=styled.p``


const Category=({recipe})=>{
    return(
        <CategoryContainer>
        <Container>
         <ImageContainer>
          <Image src={recipe &&recipe.image}/>
          <Name>{recipe &&recipe.name}</Name>
          </ImageContainer>
          
        
        </Container>
        </CategoryContainer>
    )
}
export default Category