import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./meustreinos.css"; // Certifica-te do nome do teu ficheiro CSS

function MeusTreinos() {
  const [treinos, setTreinos] = useState([]);

  // 1. Carrega os treinos salvos no localStorage assim que a página abre
  useEffect(() => {
    const minhaLista = localStorage.getItem("@treinos");
    setTreinos(JSON.parse(minhaLista) || []);
  }, []);

  // 2. Função para remover um treino usando .filter()
  function excluirTreino(id) {
    const filtroTreinos = treinos.filter((item) => item.id !== id);
    setTreinos(filtroTreinos);
    localStorage.setItem("@treinos", JSON.stringify(filtroTreinos));
  }

  return (
    <div className="containerMeusTreinos">
      <h1>Meus Treinos Salvos</h1>

      {/* Mensagem caso não exista nenhum treino salvo */}
      {treinos.length === 0 && <p className = "mensagemVazia">Você não possui nenhum treino salvo na sua lista.</p>}

      <div>
        {treinos.map((item) => {
          return (
            <article className="treinos" key={item.id}>
              <h2>📌 {item.titulo}</h2>
              <h3>🎯 Agrupamento: {item.grupo}</h3>
              <p><strong>📋 Exercícios:</strong> {item.descricao}</p>
              <p><strong>🔁 Séries:</strong> {item.series}</p>
              <p><strong>⏳ Descanso:</strong> {item.descanso}</p>

              <div className="areabtn">
                <Link className="botao" to={`/treino/${item.id}`}>
                  Detalhes
                </Link>
                <button className="botao" onClick={() => excluirTreino(item.id)}>
                  Excluir
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default MeusTreinos;