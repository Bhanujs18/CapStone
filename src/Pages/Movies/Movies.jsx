import React, { useState } from 'react'
import { Container, Heading, Wrapper , Card, FreeSection, Cards, MoviesBox, Genre, BigWhiteText} from '../../style'
import { genre } from '../../helper/genre'

function Movies() {

  const [movies,setMovies] = useState([]);

  const selected = (name) =>{
    if(movies.includes(name.name)){
      setMovies((prev)=> prev.filter((cur)=>cur !== name.name))
    }
    else{
      setMovies((prev)=>[...prev, name.name]);
    }
  }

  return (
    <Wrapper>
     <FreeSection>
              <div style={{display:'block' , textAlign:'left' , paddingLeft:'1.5rem'}}>
          <Heading style={{textAlign:'left'}}>Super App</Heading>
        <BigWhiteText style={{color:'white'}}>Choose your entertainment <br />category</BigWhiteText>
       
        <MoviesBox>
          {movies.map((cur)=>{
            return(
                <Genre>{cur}</Genre>
            )
          })}
        </MoviesBox>
        </div>
        <Cards>
          {genre.map((cur)=>{
            return(
              <Card key={cur.name} onClick={()=>selected(cur)} style={{background:cur.color}}>
                <p style={{color:'white'}}>{cur.name}</p>
                <img src={cur.img} /></Card>
            )
          })}
        </Cards>
        </FreeSection>
    </Wrapper>
  )
}

export default Movies