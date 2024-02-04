import React, { useEffect, useState } from 'react'
import { Heading, Wrapper , Card, FreeSection, Cards, MoviesBox, Genre, BigWhiteText, Warning, Button } from '../../style'
import { genre } from '../../helper/genre'
import { useNavigate } from 'react-router-dom';

function Movies() {

  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(true);

const navigate = useNavigate();

  const remove = (name) => {
    setMovies((prev)=> prev.filter((cur)=>cur !== name))
  }

  const selected = (name) =>{
    if(movies.includes(name.name)){
      setMovies((prev)=> prev.filter((cur)=>cur !== name.name)) 
    }
    else{
      setMovies((prev)=>[...prev, name.name]);
    }
  }

  useEffect(()=>{
  movies.length < 3 ?  setError(true) : setError(false);
  },[movies])

  return (
    <Wrapper>
     <FreeSection>
              <div style={{display:'block' , textAlign:'left' , paddingLeft:'1.5rem'}}>
          <Heading style={{textAlign:'left'}}>Super App</Heading>
        <BigWhiteText style={{color:'white'}}>Choose your entertainment <br />category</BigWhiteText>
       
        <MoviesBox>
          {movies.map((cur)=>{
            return(
                <Genre>{cur}<img onClick={()=>remove(cur)} width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply"/></Genre>
            )
          })}
        </MoviesBox>
        {movies.length <3 ?
         <Warning><img width="48" height="48" src="https://img.icons8.com/color/48/high-priority.png" alt="high-priority"/>Minimum 3 category required</Warning> :
         <></> }
       
        </div>
        <div style={{width:'50%' }}>        <Cards>
          {genre.map((cur)=>{
            return(
              <Card  style={{
                border: `${movies.includes(cur.name) ? "4px green solid" : "4px black solid"}` ,
                background:cur.color}} key={cur.name} onClick={()=>selected(cur)} >
                <p style={{color:'white'}}>{cur.name}</p>
                <img src={cur.img} />
                </Card>
            )
          })}
        </Cards>
        <div style={{ display:'flex' , justifyContent:'end'}}>
          {error ? <></> : 
        <Button style={{width:'9rem' , fontSize:'1rem' , margin: "1.5rem"}} onClick={()=>navigate("../info")}>Next Page</Button> }
        </div>
        </div>

        </FreeSection>
        
    </Wrapper>
  )
}

export default Movies