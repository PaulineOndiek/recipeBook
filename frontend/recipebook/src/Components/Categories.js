import styled from "styled-components"
const CategoryContainer=styled.div`
background:#FFFFFF;`
const Container=styled.div`
margin:0 auto;
width:80%;
`
const MainContainer=styled.div`
display:flex;
align-items:center;
border:2px solid #F6F6F6;
background:#F6F6F6;
border-radius:5px;
gap:2em;`
const ImgContainer=styled.div`
width:50%;
height:50%;
`

const Image=styled.img`
width:100%;
height:100%;
border-radius:10px;
box-shadow:0 0 2px grey;
object-fit:cover;
`
const ParaContainer=styled.div`
width:50%;`
const Para=styled.p`
line-height:1.5em;`
const Head=styled.h2``


const Categories=({recipe})=>{
    return(
        <CategoryContainer>
        <Container>
            <MainContainer>
            <ImgContainer>
                <Image  src={recipe&&recipe[4].image}/>
            </ImgContainer>
            <ParaContainer>
                <Head>{recipe && recipe[4].name}</Head>
                 <Para>{recipe && recipe[4].instructions}</Para>   
                 <Para>{recipe && recipe[4].cookTime}</Para>
                 </ParaContainer>
                 </MainContainer>
        </Container>
        </CategoryContainer>
    )
}

export default Categories