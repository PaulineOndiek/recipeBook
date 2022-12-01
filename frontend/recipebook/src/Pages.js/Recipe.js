import styled from "styled-components"
import Nav from "../Components.js/Nav"
const RecipeContainer=styled.div``
const Container=styled.div``
const InputDiv=styled.div``
const Input=styled.input``
const Button=styled.button``


const Recipe=()=>{
    return(
    
        
        <RecipeContainer>
            <Nav/>
            <Container>
                <InputDiv>
                <Input>Recipe Name</Input>
                <Input>Cook Time</Input>
                <Input>Servings</Input>
                <Input>Instructions</Input>
                <Input>Ingredients</Input>
                <Button>Add Recipe</Button>
                </InputDiv>
            </Container>
        </RecipeContainer>
        
    )
}
export default Recipe;