import styled from "styled-components"
import Nav from "../Components/Nav"
import Editar from "../Components/Editor"

const RecipeContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`width:80%;
margin:0 auto;`
const RecipeInput=styled.div`
display:flex;
flex-direction:column;`
const Input=styled.input``
const TextArea=styled.textarea``
const Button=styled.button``

const Recipe=()=>{
    return(
        <RecipeContainer>
        <Nav/>
        <Container>
            <RecipeInput>
                
                <Input type="text" placeholder="Name:"/>
                <Input type="text" placeholder="Cook Time"/>
                <Input type="text" placeholder="Servings"/>
                {/* <Editar/> */}
                <TextArea></TextArea>
                <Input type="text" placeholder="Ingredients"/>
                <Button>Add Recipe</Button>
            </RecipeInput>

            

        </Container>
        </RecipeContainer>
    )
}
export default Recipe