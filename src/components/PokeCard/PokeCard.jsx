import { useEffect, useState } from "react";
import "./card.css";

export default function PokeCard() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const apiCall = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall(ids[index])
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, [index]);

  const handleIndex = () => {
    return setIndex(index + 1);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {index === ids.length - 1 ? (
        <>
          <p className="error-text">No hay mas</p>
          <button
            className="btn-reset"
            onClick={() => {
              setIndex(1);
            }}
          >
            Reset
          </button>
        </>
      ) : (
        <div className="card-content">
          <h2 className="poke-name">{data.name}</h2>
          <img className="poke-img" src={data.sprites.front_default} />
          <ul className="poke-type-list">
            {" "}
            {data.types.map((tipo) => {
              return <li className="poke-type">{tipo.type.name}</li>;
            })}
          </ul>
          <button className="card-btn" onClick={handleIndex}>
            siguiente
          </button>
        </div>
      )}
    </>
  );
}
