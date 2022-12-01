import styled from "styled-components"
import Home from "../Pages.js/Home"
import Recipe from "../Pages.js/Recipe"
import { Link } from "react-router-dom"

const NavContainer=styled.div``
const Container=styled.div``
const NavUl=styled.ul``
const NavList=styled.li``
const Nav=()=>{
    return(
        <NavContainer>
            <Container>
                <NavUl>
     <NavList> <Link to="/"><Home/></Link></NavList>
       <NavList><Link to="/Recipe"> <Recipe/></Link></NavList>
       </NavUl>
       </Container>
        </NavContainer>
    )
}
export default Nav