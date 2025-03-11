import React from "react"
function ActorsList({name, movies}){
    return(
        <>
        <h2>{name}</h2>
        <ul>
        {
            movies.map((movie,index)=>(
                <li key={index}>{movie}</li>

            ))
        }
        </ul>
        
        </>
    )
}
export default ActorsList;