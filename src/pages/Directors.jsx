import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorList from "../components/DirectorList";

function Directors() {
  const[directors, setDirectors]=useState([]);
  useEffect(() =>{
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data =>{
        setDirectors(data)
        console.log(data);
      } )
       
      .catch(error => console.error(error))
  }, [])



  return (
    <>
      <header>
       <NavBar/>
      </header>
      <main>
       <h1>Directors Page</h1>
       <article>
        {directors.map((director)=>(
         <DirectorList key={director.id} name={director.name} movies={director.movies}/>
        
        ))}
 
       </article>
      </main>
    </>
  );
};

export default Directors;
