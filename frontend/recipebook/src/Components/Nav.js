import styled from "styled-components"
import {Link} from "react-router-dom"

const NavContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;`
const NavUl=styled.ul`
display:flex;
justify-content:space-between;`
const NavLeft=styled.div`
display:flex;
gap:2em;`

const NavRight=styled.div`
display:flex;
gap:2em;`
const NavList=styled.li`
list-style:none;
color:#494A4A;
padding:.6em 1.7em;

&:hover{padding:.6em 1.7em;
    background:#DB254E;
    border-radius:5px;}


`

const Nav=()=>{
    return(
        <>
        <NavContainer>
            <Container>
                <NavUl>
                    <NavLeft>
                        
                <NavList><a to="/">Home</a></NavList>
                <NavList><a to="/recipe">Recipe</a></NavList>
                </NavLeft>
                <NavRight>
                <NavList><a to="/signup">Signup</a></NavList>
                <NavList><a to="/login">Login</a></NavList>
                </NavRight>
                </NavUl>
            </Container>
        </NavContainer>
        </>
    )
}

export default Nav;
