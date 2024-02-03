import React from "react";
import {Wrapper,  Container,  ImageBox,  Image,  InputBox,  Inputs, Heading, Input, CenterDiv, WhiteText, Label, Button ,GreenText} from "../../style.js";

function Register() {
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
          <WhiteText>Create your new accont</WhiteText>
          </CenterDiv>
          <CenterDiv>
             <Inputs>
             <Label htmlfor="name" />
            <Input type="text" id="name" placeholder="Name" />
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="number" placeholder="Number" />
            <Label htmlFor="checkbox">
            <Input type="checkbox"  id="checkbox"/>
            <WhiteText>Share my registration data with Superapp</WhiteText>
            </Label>
            <Button>Sign Up</Button>
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
