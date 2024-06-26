"use client"
import React, { useEffect, useState } from 'react';
import Contadores from './components/Contadores';
import Formulario from './components/Formulário';
import Lista from './components/Lista';
import axios from 'axios';

const Page: React.FC = () => {
  const [trigger, setTrigger] = useState(0);
  
  const fetchInicial = axios.get("http://localhost:4000/");
  useEffect(() => {
  }, []);
  useEffect(() => {
  }, [trigger]);

  const handleTrigger = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <Contadores trigger={trigger} />

      {typeof fetchInicial != null &&
        <Lista trigger={trigger} />
      }

      <Formulario onTrigger={handleTrigger} />
    </div>
  );
};

export default Page;