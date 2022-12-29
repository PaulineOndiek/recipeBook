import { useState } from "react"
import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Nav from "../Components/Nav"
import { useNavigate } from "react-router-dom";
const SignupContainer=styled.div`
background:#F9F9F9;
`
const Container=styled.div`
margin:0 auto;
width:80%;

`
const SignContainer=styled.div`
background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
height:80vh;
width:80vw;
background-position:center center;
background-size:cover;
background-repeat:no repeat;
background-size:cover;
border-radius:5px;
object-fit:cover;`

const MainContainer=styled.div`
display:flex;
justify-content:center;

`

const InputContainer=styled.div`
display:flex;
flex-direction:column;
width:50%;
gap:2em;
// box-shadow:0 0 2px white;
align-items:center;
// background:white;
border-radius:10px;
`
const Para=styled.p`
color:white;
font-weight:bold;`
const Head=styled.h2`
color:white;
font-weight:bold;`
const Input=styled.input`
outline:none;
border:none;
color:white;
background:inherit;
// &:active{
//     border:1px solid #DB254E;
// }`

const Inputs=styled.div`
display:flex;
border:2px solid white;
align-items:center;
border-radius:20px;
padding:1em 2em;
outline:none;
width:40%;
// &:active{
//     border:1px solid #DB254E;
// }`
const PasswordContainer=styled.div``
const PasswordShower=styled.div``
const ShowPassword=styled.div``

const Button=styled.button`
border-radius:20px;
padding:1em 2em;
background:#DB254E;
color:white;
border:none;
outline:none;`


const Signup=()=>{
const [user, setUser]=useState({
username:"",
nationality:"",
email:"",
password:""
})

const [error,setError]=useState(null)
const [empty,setEmpty]=useState([])
const [show,setShow]=useState(false)
//useNavigate
const navigate=useNavigate()

const handleSign=async()=>{
if(user.username==="" || user.nationality==="" || user.email==="" || user.password===""){
   setError ("Please fill all the required fields")
}

if (user.username===""){
    empty.push("username")
}
if(user.nationality===""){
    empty.push("nationality")
}
if (user.email===""){
   empty.push("email") 
}
if(user.password===""){
    empty.push("password")
}
else{
    const newUser=await fetch ("http://localhost:8000/api/user/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }
    )
    const json=await newUser.json()
    if (!json.ok){
        setError(json.error)
    }
    navigate("/")
}
}

    return(
        <SignupContainer>
        <Nav/>
        <Container>
            <SignContainer>
        <MainContainer>
        <InputContainer>
        <Para>Hi There,</Para>
        <Head>Sign Up!</Head>
        <Para>{error}</Para>
        <Inputs>
        <Input className={empty.includes("username")?error:""} type="text" placeholder="Username" onChange={(e)=>setUser(prev=>({...prev, username:e.target.value}))}/>
        </Inputs>

        <Inputs>
        <Input className={empty.includes("nationality")?error:""}   type="text" placeholder="Nationality" onChange={(e)=>setUser(prev=>({...prev, nationality:e.target.value}))} />
        </Inputs>

        <Inputs>
        <Input className={empty.includes("email")?error:""} type="email" placeholder="Email Address" onChange={(e)=>setUser(prev=>({...prev,email:e.target.value}))} />
        </Inputs>

        <Inputs>
            <PasswordContainer>
        <Input className={empty.includes("password")?error:""} type={show?"text":"password"} placeholder="Password" onChange={(e)=>setUser(prev=>({...prev,password:e.target.value}))} />
        </PasswordContainer>
        <PasswordShower>
        <ShowPassword onClick={() => setShow((prev) => !prev)}/>
            
        {
            show? <VisibilityIcon/>:<VisibilityOffIcon/>
        }
        </PasswordShower>
        </Inputs>
        
        <Button onClick={handleSign} >Create Account</Button>
        </InputContainer>
        </MainContainer>
        </SignContainer>
        </Container>
        </SignupContainer>
    )
}
export default Signup