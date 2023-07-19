import React, { useEffect, useState } from 'react';
import '../css/estilos.css'

function Card2(props){

const [pokemon,setPokemon]=useState({});
const [isLoading,setIsLoading]=useState(true);
    const url='https://pokeapi.co/api/v2/stat/6/'
    const fethApi=async()=>{
        const response=await fetch(url)
        const json=await response.json()
        setPokemon(json)

    }

    useEffect(()=>{
        (async()=>{
            await fethApi()
            setIsLoading(false)
        })()
        
    },[] );

if(isLoading){
    return(
        <div>Cargando.....</div>
    )
}

return(
<div className='contenedorTexto2'>
    <img className='contenedorImagen2' src={pokemon.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo2'> Nombre</h5>
    <p className='contenedorParrafo2'>tipo</p>
</div>

);
}
export default Card2;