import styled from "styled-components"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const CategoryContainer=styled.div``
const Container=styled.div`
margin:0 auto;
// width:100%;
display:flex;
flex-wrap:wrap;
gap:1em;`
const Div=styled.div`
width:20%;`
const TimeDiv=styled.div`

`
const Icon=styled.div``
const ImageContainer=styled.div`
height:30vh;
`
const Image=styled.img`
width:100%;
border-radius:5px;
height:100%;
object-fit:cover;`
const Name=styled.p``


const Category=({recipe})=>{
    return(
        <CategoryContainer>
        <Container>
        {recipe && recipe.map(recipeInfo=>{
            return(      
                <Div>
         <ImageContainer>
          <Image src={recipeInfo.image}/>
          </ImageContainer>
          <Name>{recipe &&recipeInfo.name}</Name>
          
          <Name> 
           
            <AccessTimeIcon/>  
            
          {recipeInfo.cookTime}</Name>
          
          </Div>
            )
          }
            )
         } 
       
        
        </Container>
        </CategoryContainer>
    )
}
export default Category