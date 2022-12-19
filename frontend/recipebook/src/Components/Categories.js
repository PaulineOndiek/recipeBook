import styled from "styled-components"
const CategoryContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;
`

const ImgContainer=styled.div`
width:100%;
height:50%;
`

const Image=styled.img`
width:90%;
height:100%;
border-radius:10px;
box-shadow:0 0 2px grey;
object-fit:cover;
`

const Para=styled.p``



const Categories=({recipe})=>{
    return(
        <CategoryContainer>
        <Container>
            <ImgContainer>
                <Image  src={recipe&&recipe[0].image}/>
            </ImgContainer>
                <Para>{recipe && recipe[1].name}</Para>
                 <Para>{recipe && recipe[1].instructions}</Para>   
                 <Para>{recipe && recipe[1].cookTime}</Para>
                
        </Container>
        </CategoryContainer>
    )
}
export default Categories