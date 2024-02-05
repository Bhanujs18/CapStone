import React, { useState } from "react";
import {Wrapper,  Container,  ImageBox,  Image,  InputBox,  Inputs, Heading, Input, CenterDiv, WhiteText, Label, Button ,GreenText} from "../../style.js";

function Register() {

  const [user,setUser] = useState({
    name:"",
    Email: "",
    Username:"",
    Number:"",
  })

  const userReady = (e) => {
    e.preventDefault();
    window.localStorage.setItem("superappuser" , JSON.stringify(user));
  }


  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image src="./assets/Registerbg.png" />
          <p className="img_text">Discover new things on Superapp</p>
        </ImageBox>
        <InputBox>
          <Heading>Super App</Heading>
          <CenterDiv>
          <p>Create your new accont</p>
          </CenterDiv>
          <CenterDiv>
             <Inputs>
             <Label htmlfor="name" />
            <Input type="text" id="name" placeholder="Name" onChange={(e)=>setUser((prev)=> { return {...prev, name: e.target.value}})} />
            <Input type="text" placeholder="Username" onChange={(e)=>setUser((prev)=> { return {...prev, Username: e.target.value}})}  />
            <Input type="email" placeholder="Email"  onChange={(e)=>setUser((prev)=> { return {...prev, Email: e.target.value}})} />
            <Input type="number" placeholder="Number" onChange={(e)=>setUser((prev)=> { return {...prev, Number: e.target.value}})} />
            <Label htmlFor="checkbox">
            <Input type="checkbox"  id="checkbox"/>
            <WhiteText>Share my registration data with Superapp</WhiteText>
            </Label>
            <Button onClick={(e)=>userReady(e)}>SIGN UP</Button>
          </Inputs>
          </CenterDiv>
          <CenterDiv>
                     <div style={{width:"60%", textAlign:"left"}}>
                      <WhiteText>By clicking on Sign up. you agree to Superapp <GreenText>Terms and Conditions of Use</GreenText></WhiteText>
                      <WhiteText>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp  <GreenText>Privacy Policy</GreenText></WhiteText>
                      </div>
                      </CenterDiv>
        </InputBox>
      </Container>
    </Wrapper>
  );
}

export default Register;
