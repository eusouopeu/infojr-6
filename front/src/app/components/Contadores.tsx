/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

interface ContadoresProps {
  trigger: number;
}
const Contadores: React.FC<ContadoresProps> = ({ trigger }) => {
  const [dados, setDados] = useState<any>(null);

  function fetchData() {
    axios.get("http://localhost:4000/estatisticas")
      .then((response) => setDados(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchData
  }, []);

  useEffect(() => {
    fetchData
  }, [trigger]);

  const valorPadrao = "Valor inicial";

  return (
    <div>
      {dados ? (
        <div>
          <Card valor={dados.valor1} />
          <Card valor={dados.valor2} />
          <Card valor={dados.valor3} />
        </div>
      ) : (
        <div>
          <Card valor={valorPadrao} />
          <Card valor={valorPadrao} />
          <Card valor={valorPadrao} />
        </div>
      )}
    </div>
  );
};

interface CardProps {
  valor: string;
}

const Card: React.FC<CardProps> = ({ valor }) => {
  return <div>{valor}</div>;
};

export default Contadores;
