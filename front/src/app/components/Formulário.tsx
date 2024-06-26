import React, { useState } from 'react';

interface FormularioProps {
  onTrigger: () => void;
};
const Formulario: React.FC<FormularioProps> = (onTrigger) => {
  const [nome, setNome] = useState('');
  const [quantidadePaes, setQuantidadePaes] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Check if "nome" is a string
    if (typeof nome !== 'string') {
      console.error('Nome should be a string');
      return;
    }
    
    // Check if "quantidadePaes" is an integer
    if (!Number.isInteger(quantidadePaes)) {
      console.error('Quantidade de Pães should be an integer');
      return;
    }
    
    onTrigger;
  };

  return (
    <form action="http://localhost:4001/addCliente/" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantidade-paes">Quantidade de Pães:</label>
        <input
          type="number"
          id="quantidade-paes"
          value={quantidadePaes}
          onChange={(event) => setQuantidadePaes(Number(event.target.value))}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;