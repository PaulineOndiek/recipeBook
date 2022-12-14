import styled from "styled-components"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const CategoryContainer=styled.div`
background:#FFFFFF;
`
const Container=styled.div`
margin:0 auto;
width:80%;
`
const InfoContainer=styled.div`
display:flex;
flex-wrap:wrap;
gap:3em;`
const Div=styled.div`
width:20%;`
const TimeDiv=styled.div`
`
const Head=styled.h2``
// const Icon=styled.div``
const ImageContainer=styled.div`
height:30vh;
`
const Image=styled.img`
width:110%;
border-radius:5px;
height:60%;
object-fit:cover;`
const NameContainer=styled.div`
`
const Name=styled.div`
display:flex;
align-items:center;`


const Category=({recipe})=>{
    return(
        <CategoryContainer>
          
        <Container>
        <Head>New Recipes</Head>
          <InfoContainer>
          
        {recipe && recipe.map(recipeInfo=>{
            return(      
                <Div>
         <ImageContainer>
          <Image src={recipeInfo.image}/>
          </ImageContainer>
          <NameContainer>
          <Name>{recipe &&recipeInfo.name}</Name>
          <Name> 
            <AccessTimeIcon/>   
          {recipeInfo.cookTime}
          </Name> 
          </NameContainer>
          </Div>
            )
          }
            )
         } 
       </InfoContainer>
        
        </Container>
        </CategoryContainer>
    )
}
export default Category