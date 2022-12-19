import styled from "styled-components"
import Nav from "../Components/Nav"
import { useState } from "react"
import { useRef } from "react"
const RecipeContainer=styled.div`cd
background:#F9F9F9;`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
gap:4em;`
const RecipeInput=styled.div`
display:flex;
flex-direction:column;
gap:2em;
width:50%;
`


const FirstInputs=styled.div`
width:50%;
display:flex;
flex-direction:column;
gap:2em;
`

const Head=styled.h2``

const Para=styled.p`

`
const Image=styled.img``
const Input=styled.input`
padding:2em 1em;
border-radius:5px;
border:1px solid #DB254E;
border:none;
outline:none;

`

const TextArea=styled.textarea`
padding:2em 1em;
border:none;
outline:none;
`
const Button=styled.button`
border:1px solid #DB254E;
// border:none;
outline:none;

padding:.5em .2em;
width:20%;
border-radius:5px;
margin-left:15em;
color:#DB254E;
cursor:pointer
`

const Recipe=()=>{
const [upload,setUpload]=useState({
  name:"",
  cookTime:"",
  ingredients:"",
  servings:"",
  instructions:"",
  image:""
})
const [empty,setEmpty]=useState([])
const imageRef=useRef(null)
const [error,setError]=useState(null)

    const handleImageUpload=(e)=>{
        const file = e.target.files[0];
    const formData = new FormData();
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsrjy1hwe/image/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'recipe';
  
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  
    fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    })
    
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        if (data.secure_url !== '') {
          const uploadedFileUrl = data.secure_url;
          // localStorage.setItem('passportUrl', uploadedFileUrl);
          setUpload(prev=>({...prev,image:data.secure_url}))
        }
      })
   
  
      .catch(err => console.error(err));
      
  
  }

  const handleAddRecipe=async()=>{

try{
  if(upload.name===""||upload.cookTime===""||upload.ingredients===""||upload.servings===""||upload.instructions===""||upload.image===""){
    setError("Please fill out all the required fields")
  }

  if(upload.name===""){
    empty.push("name")
  }
if(upload.cookTime===""){
  empty.push("cookTime")
}
if(upload.image===""){
  empty.push("image")
}
if(upload.ingredients===""){
  empty.push("ingredients")
}
if(upload.instructions===""){
  empty.push("instructions")
}
if(upload.servings===""){
  empty.push("servings")
}

else{
  const response=await fetch("http://localhost:8000/api/recipes/new", {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(upload)
  
})
const responseJson=await response.json()

if(response.ok){
  setUpload({
    name:"",
    cookTime:"",
    ingredients:"",
    instructions:"",
    image:"",
   servings:""
  })
  imageRef.current.value=""

}
} 
}

catch(error){
console.log(error)
}
  }


    return(
        <RecipeContainer>
        <Nav/>
        <Container>
          <FirstInputs>
          <Image src={upload.image}/>
           <Head>{upload.name}</Head> 
            <Para>{upload.cookTime}</Para>
            <Para>{upload.servings}</Para>
            <Para>{upload.instructions}</Para>
             <Para type="text" placeholder="Ingredients">{upload.ingredients}</Para>
             
          </FirstInputs>



            <RecipeInput>
                {error &&<Para>{error}</Para>}
                <Input className={empty.includes("image")?"error":""}type="file" ref={imageRef} onChange={(e)=>{handleImageUpload(e)}}/>
                <Input className={empty.includes("name")?"error":""} type="text" placeholder="Name:" value={upload.name} onChange={(e)=>setUpload(prev=>({...prev,name:e.target.value}))}/>
                <Input className={empty.includes("cookTime")?error:""} type="text" placeholder="Cook Time" value={upload.cookTime} onChange={(e)=>setUpload(prev=>({...prev,cookTime:e.target.value}))}  />
                <Input className={empty.includes("servings")?"error":""} type="text" placeholder="Servings" value={upload.servings} onChange={(e)=>setUpload(prev=>({...prev,servings:e.target.value}))}/>
                <TextArea className={empty.includes("instructions")?"error":""}placeholder="Instructions" value={upload.instructions} onChange={(e)=>setUpload(prev=>({...prev,instructions:e.target.value}))}></TextArea>
                <TextArea className={empty.includes("ingredients")?"error":""}type="text" placeholder="Ingredients" value={upload.ingredients} onChange={(e)=>setUpload(prev=>({...prev,ingredients:e.target.value}))}></TextArea>
                
                <Button onClick={handleAddRecipe} disabled={upload.image === ""}>Add Recipe</Button>
            </RecipeInput>  
        </Container>
        </RecipeContainer>
    )
}

export default Recipe