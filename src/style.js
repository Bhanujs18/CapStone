import styled from'styled-components';
import { genre } from './helper/genre';
export const Wrapper = styled.section`
height: 50rem;
background-color: black;
overflow:hidden;
`
export const Container = styled.div`
width:100%;
display: flex;
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
width: 10%;
text-align: center;
color: #72db73;
display: block;
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
background-color: #148a08;
border:none;
width: 100%;
cursor:pointer;
-webkit-text-stroke: 0.1px black;
color: white;
padding: 0.5rem 0rem;
font-size: 1.3rem;
font-weight: 500;
border-radius: 15px;
`
export const Card = styled.div`
width: 9rem;
padding: 1rem;
border-radius: 15px;
img{
    width: 9rem;
    border-radius: 15px;
    height: 7rem;
}
`
export const Cards = styled.div`
display: flex;
height: max-content;
margin: 1rem 0rem;
justify-content:Center;
flex-wrap: wrap;
gap: 1rem;
`
export const MoviesBox = styled.div`
display: flex;
width: 25rem;;
flex-wrap: wrap;
justify-content: start;

`

export const FreeSection = styled.div`
display: flex;
justify-content: space-between;
`
export const Genre = styled.p`
background-color: #148a08;
margin:0rem 0.4rem 0.3rem 0rem;
padding: 0.3rem 0.6rem;
border-radius: 9px;
color: white;
gap:1rem;
display: flex;
align-items:center;
`

export const BigWhiteText = styled.p`
color: "white";
font-size: 3rem;
`
export const Warning = styled.div`
color: red;
display: flex;
margin: 2rem 0rem;
align-items:center;
gap: 1rem;
`

export const userImage = styled.img`
width: 4rem;
height: 8rem;
border-radius: 15px;
`