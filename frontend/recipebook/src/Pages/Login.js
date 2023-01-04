import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Nav from "../Components/Nav"
const LoginContainer=styled.div`
background:#F6F6F6;
height:100vh;
`
const LogContainer=styled.div`
background:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(https://images.pexels.com/photos/8896107/pexels-photo-8896107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
margin:0 auto;
height:90vh;
width:50vw;
background-position:center center;
background-size:cover;
background-repeat:no repeat;
background-size:cover;
border-radius:5px;
object-fit:cover;
`
const Container=styled.div`
margin:0 auto;
width:80%;
box-shadow: 0 0 3em white; `
const MainContainer=styled.div`
display:flex;
justify-content:center;
`
const InputContainer=styled.div`
display:flex;
flex-direction:column;
width:50%;
gap:2em;
align-items:center;
border-radius:10px;`

const Para=styled.p`
color:white;
font-size:large;`
const Input=styled.div`
display:flex;
border:2px solid white;
align-items:center;
border-radius:20px;
padding:1em 2em;
outline:none;
width:60%;

}
`
const LoginInput=styled.input`
outline:none;
border:none;
color:white;
background:inherit;
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
    const [empty,setEmpty]=useState([])

    const [error,setError]=useState("")
    const navigate=useNavigate()

    const handleLogin=async()=>{
try{
    if(user.email===""|| user.password===""){
        setError("Please Fill all the required fields")

    }

    if (user.email===""){
        empty.push("email")
    }
     
    if(user.password===""){
        empty.push("password")
    }

    else{
    setError("")
    
    const url=await ("http://localhost:8000/api/user/login")
    const options={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }
    const user=await fetch(url,options)
    const jsonResponse=await user.json()
    
    if (!user.ok){
        setError(jsonResponse.error)

    }
    if (user.ok){
        console.log(jsonResponse)
        //navigation
        navigate("/recipe")
        localStorage.setItem("loginUser",JSON.stringify(jsonResponse))
        JSON.parse(localStorage.getItem("loginUser"))
    }
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
        <LogContainer>
            <MainContainer>
                
                <InputContainer>
            <Para>{error}</Para>
            <Para>Welcome Back,</Para>
            <Para>Login!</Para>
            <Input>
            <LoginInput className={empty.includes("email")?error:""} type="email" placeholder="Email Address" onChange={(e)=>setUser(prev=>({...prev,email:e.target.value}))}  />
            </Input>

             <Input>
            <LoginInput  className={empty.includes("password")?error:""} 
            type={show?"text":"password"} placeholder="Password" 
            onChange={(e)=>setUser(prev=>({...prev,password:e.target.value}))}
             />
            {show?<VisibilityOffIcon/>:<VisibilityIcon/>}
            </Input>
            <Button onClick={handleLogin}>Login</Button>
            </InputContainer>
            
            </MainContainer>
            </LogContainer>
        </Container>
        </LoginContainer>
    )
}

export default Login