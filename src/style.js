import styled from'styled-components';

export const Wrapper = styled.section`
height: 50rem;
overflow:hidden;
`
export const Container = styled.div`
width:100%;
display: flex;
height: 50rem;
position: absolute;
justify-content: center;
`
export const Image = styled.img`
width: 100%;
overflow:hidden;
height: 50rem;
position: relative;
`
export const InputBox = styled.div`
width:50%;
background: black;
`
export const ImageBox = styled.div`
width:50%;
height: 50rem;
background: black;
`
export const Heading = styled.p`,
width: 100%;
text-align: center;
color: #72db73;
font-family: 'Protest Riot', sans-serif;
font-size: 3rem;
`
export const Inputs = styled.form`

`
export const Input = styled.input`
display: block;
background-color: #292929;
border:none;
width: 100%;
margin: 1.4rem 0rem;
height: 2.5rem;
color: white;
overflow:hidden;
outline:none;
`

export const CenterDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:Center;
`

export const WhiteText = styled.p`
text-align-center;
color: #7C7C7C;

`
export const GreenText = styled.span`
color: #72db73;

`

export const Label = styled.label`
display: flex;
justify-content: left;
width: 100%;
`
export const Button = styled.button`
background-color: #72db73;
border:none;
width: 100%;
cursor:pointer;
color: white;
padding: 0.5rem 0rem;
font-size: 1.3rem;
font-weight: 800;
text-transform: uppercase;
border-radius: 15px;
`