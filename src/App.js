import { useState } from "react"; // Importa a função useState do React
import { FiSearch } from "react-icons/fi"; // Importa o ícone de busca do React Icons
import "./style.css"; // Importa o arquivo de estilos CSS

import api from "./services/api"; // Importa o módulo de API

function App() {
  // Declaração de estados utilizando useState
  const [input, setInput] = useState(""); // Estado para o valor do input
  const [cep, setCep] = useState({}); // Estado para armazenar dados do CEP

  // Função assíncrona para lidar com a busca do CEP
  async function handleSearch() {
    if (input === '') {
      alert("Preencha algum CEP!"); // Alerta se o input estiver vazio
      return;
    }

    try {
      const response = await api.get(`${input}/json`); // Faz a requisição à API
      setCep(response.data); // Atualiza o estado do CEP com os dados da resposta
      setInput(""); // Limpa o input após a busca

    } catch {
      alert("Ops, erro ao buscar cep!"); // Alerta em caso de erro na requisição
      setInput(""); // Limpa o input em caso de erro
    }
  }

  return (
    <div className="container"> {/* Contêiner principal */}
      <h1 className="title">Buscador CEP</h1> {/* Título da página */}

      {/* Contêiner para entrada de dados */}
      <div className="container-input">
        <input 
          type="text" 
          placeholder="Digite seu cep..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        /> {/* Input controlado que atualiza o estado 'input' */}

        {/* Botão de busca com ícone */}
        <button className="buttonSearch" onClick={handleSearch}>
         <FiSearch size={25} color="#FFF" /> {/* Ícone de busca */}
        </button>
      </div>

      {/* Condição para renderizar os dados do CEP */}
      {Object.keys(cep).length > 0 && (
        <main className="main"> {/* Elemento principal */}
          <h2>CEP: {cep.cep}</h2> {/* Exibe o CEP retornado pela API */}

          <span>{cep.logradouro}</span> {/* Exibe o logradouro */}
          <span>Complemento: {cep.complemento}</span> {/* Exibe o complemento */}
          <span>{cep.bairro}</span> {/* Exibe o bairro */}
          <span>{cep.localidade} - {cep.uf}</span> {/* Exibe a localidade e UF */}
        </main>
      )};

    </div>
  );
}

export default App; // Exporta o componente App
