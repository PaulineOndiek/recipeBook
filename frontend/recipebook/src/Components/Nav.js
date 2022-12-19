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
                        
                <NavList><Link to="/">Home</Link></NavList>
                <NavList><Link to="/recipe">Recipe</Link></NavList>
                </NavLeft>
                <NavRight>
                <NavList><Link to="/signup">Signup</Link></NavList>
                <NavList><Link to="/login">Login</Link></NavList>
                </NavRight>
                </NavUl>
            </Container>
        </NavContainer>
        </>
    )
}

export default Nav;
