import { useState } from "react"
import { useNavigate } from "react-router-dom";
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
display:flex;
border:2px solid white;
align-items:center;
border-radius:20px;
padding:1em 2em;
outline:none;
&:active{
    border:1px solid #DB254E;
}

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
    const [empty,setEmpty]=useState()

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
            <Para>{error}</Para>
            <Input>
            <LoginInput className={empty.includes("email")?error:""} type="email" placeholder="Email Address" onChange={(e)=>setUser(prev=>({...prev,email:e.target.value}))}  />
            </Input>

             <Input>
            <LoginInput className={empty.includes("password")?error:""} type={show?"text":"password"} placeholder="Password" onChange={(e)=>setUser(prev=>({...prev,password:e.target.value}))} />
            {show?<VisibilityOffIcon/>:<VisibilityIcon/>}
            </Input>
            <Button onClick={handleLogin}>Login</Button>
        </Container>
        </LoginContainer>
    )
}

export default Login