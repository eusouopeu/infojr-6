import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

interface ContadoresProps {
  trigger: number;
}
const Lista: React.FC<ContadoresProps> = ({ trigger }) => {
  const [clientes, setClientes] = useState([]);

  
    // Função para buscar os dados dos clientes no back-end
  function fetchClientes() {
    axios.get("http://localhost:4000/")
      .then((response) => setClientes(response.data))
      .catch((error) => console.error(error));
  }
  
  useEffect(() => {
    fetchClientes;
  }, []);
  
  useEffect(() => {
    fetchClientes;
  }, [trigger]);
  

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:4001/deleteCliente/${id}`, {
        method: 'DELETE'
      });
      // Atualiza a lista de clientes após a exclusão
      const response = await fetch('http://localhost:4001/');
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error('Erro ao deletar o cliente:', error);
    }
  };

  // ...

  return (
      <ul>
        {clientes.length === 0 ? 
          (<li>Nenhum cliente na fila</li>) 
          :
          clientes.map((cliente: any) => (
            <li key={cliente.id}>
              {cliente.nome}
              <button onClick={() => handleDelete(cliente.id)}>
                <FiTrash2 /> 
              </button>
            </li>
          ))}
      </ul>
  );
};

export default Lista;