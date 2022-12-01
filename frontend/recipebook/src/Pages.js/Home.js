import styled from "styled-components"
import Nav from "../Components.js/Nav"
const HomeContainer=styled.div``
const Container=styled.div`
width:80%;
margin:0 auto;
`
const HomeHead=styled.h2``


const Home=()=>{
    return(
        
        
        <HomeContainer>
            <Nav/>
            <Container>
            <HomeHead>
          Recipe Name
            </HomeHead>
            Cook Time 
            Servings
            Instructions
            Ingredients

            </Container>

        </HomeContainer>
        
    )
}
export default Home 