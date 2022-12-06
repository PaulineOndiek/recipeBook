import { useState } from "react"
import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Nav from "../Components/Nav"
const LoginContainer=styled.div`
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;`
const Para=styled.p``
const Input=styled.div`
padding:1em 2em;
outline:none;
border:none;

&:active{
    border:1px solid #DB254E;
}
`
const LoginInput=styled.input`

margin:2em;
`


const Button=styled.button`
border-radius:20px;
padding:1em 2em;
background:#DB254E;
color:white;
border:none;
outline:none;`

const Login=()=>{
    const [show,setShow]=useState()
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const [error,setError]=useState()

    const handleLogin=()=>{
try{
    if(user.email===""|| user.password===""){
        setError("Please Fill all the required fields")

    }

}
catch(error){
console.log(error)
}
    }

    return(
        <LoginContainer>
            <Nav/>
        <Container>
            <Para>{error}</Para>
            <Input>
            <LoginInput type="email" placeholder="Email Address" />
            </Input>

             <Input>
            <LoginInput type={show?"text":"password"} placeholder="Password"/>
            {show?<VisibilityOffIcon/>:<VisibilityIcon/>}
            </Input>
            <Button onClick={handleLogin}>Login</Button>
        </Container>
        
        </LoginContainer>
    )
}
export default Login