import  {useEffect, useState } from "react"



export default function PokeCard() {
  const ids = [1,2,3,4,5,6,7,8,9];

  const apiCall = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json()
    console.log(data)
    return data
  }


  return (
    <div className="card-content">{data?.name}</div>
  )
}
