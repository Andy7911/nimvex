'use client';

import React, { useEffect, useState } from 'react';
import "../styles/equipe.scss";

async function getdata() {
  let res = await fetch(`https://rickandmortyapi.com/api/character`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return res.json();
}

export default function Equipe() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let fetchedData = await getdata();
      setData(fetchedData);
      setLoading(false);
    }
    fetchData();
  }, []);



  return (
    <div>
      <h1 className="equipe">Équipe - Mon Équipe</h1>
      <ul>
        {data.results.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
