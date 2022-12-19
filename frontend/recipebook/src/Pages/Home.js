import styled from "styled-components"
import Nav from "../Components/Nav"
import Category from "../Components/Category";
import Categories from "../Components/Categories";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { useEffect, useState, useContext} from "react";
import { Context } from "../Context/States";
const HomeContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
box-shadow: 0 0 2em solid #FFFFFF;
padding:2em;`
const MainContainer=styled.div`
background:url(https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
height:80vh;
width:80vw;
background-position:center;
background-repeat:no repeat;
background-size:cover;
border-radius:5px;
object-fit:cover;

`

const Image=styled.img`
width:100%;
object-fit:cover;
border-radius:6px;
`
const Input=styled.input`
background:inherit;
outline:none;
border:none;
width:100%;
`
const Button=styled.button`
padding:.6em 1.5em;
background:#DB254E;
border-radius:4px;
border:none;
color:white;`
const ParaDiv=styled.div`
color:#474848;
font-size:large;
font-weight:bold;`
const Para=styled.p`padding-left:4em;`
const IconDiv=styled.div`
display:flex;
align-items:center;
justify-content:space-around;
border:2px solid #F9F9F9;
`
const IconContainer=styled.div`
// position:absolute;
width:50%;
margin:0 auto;
padding-top:10em;
`
const Head=styled.h2`padding-left:2em;
`


const Home=()=>{
    const {food}=useContext(Context)
const [recipe,setRecipe]=food
   
useEffect(()=>{
fetch("http://localhost:8000/api/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setRecipe(data);
     
      })

     .catch(err=>console.log(err))
  }, []);

     return(
        <HomeContainer>
            <Nav/>
            <Container>
                <MainContainer>
                  {console.log(recipe)}
                  
                    <IconContainer>
                    <ParaDiv>
                        <Para>Easy way to make your favourite dish</Para>
                        <Head>What are you cooking today?</Head>
                    </ParaDiv>
                    <IconDiv>
                    <RoomServiceIcon/>
                   <Input placeholder="Search for recipes by ingredient,dish or keyword"/>
                   <Button>Search</Button>
                   </IconDiv>
                   </IconContainer>
                </MainContainer>
                <Category recipe={recipe}/>
                <Categories recipe={recipe}/>

            </Container>
        </HomeContainer>
    )
}

export default Home