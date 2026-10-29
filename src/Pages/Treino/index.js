import React, { useState, useEffect } from "react";
import "./treino.css";
import { useParams } from "react-router-dom";

const listaTreinos = [
  { id: 1, titulo: "Treino A", grupo: "Peito e Tríceps", descricao: "Supino reto , supino 45º articulado , Paralelas e Tríceps corda", series: "3 x 10 a 15", descanso: "1 min" },
  { id: 2, titulo: "Treino B", grupo: "Costas e Bíceps", descricao: "Puxada  Pronada na polia , Remada baixa com triângulo, Rosca direta , Rosca scott ", series: "3 x 10 a 15", descanso: "1 min" },
  { id: 3, titulo: "Treino C", grupo: "Membros inferiores", descricao: "Agachamento Hack , Cadeira extensora , Mesa-flexora , Flexão plantar ", series: "3 x 10 a 15", descanso: "1 min" }
];

function Treino() {
  const { id } = useParams();
  const [treino, setTreino] = useState({});
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);
  const [concluido, setConcluido] = useState(false);

  // Busca na lista fixa e também nos treinos salvos no localStorage
  useEffect(() => {
    const minhaLista = localStorage.getItem("@treinos");
    const treinosSalvos = JSON.parse(minhaLista) || [];

    // Junta os treinos padrões com os que o usuário adicionou
    const todosOsTreinos = [...listaTreinos, ...treinosSalvos];

    const treinoEncontrado = todosOsTreinos.find((item) => item.id == id);
    if (treinoEncontrado) {
      setTreino(treinoEncontrado);
    }
  }, [id]);

  // Controle do Cronômetro
  useEffect(() => {
    let interval = null;
    if (rodando) {
      interval = setInterval(() => {
        setSegundos((segundosAnteriores) => segundosAnteriores + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [rodando]);

  function iniciar() { setRodando(true); }
  function pausar() { setRodando(false); }
  function zerar() { setRodando(false); setSegundos(0); }

  function alternarStatus() {
    setConcluido(!concluido);
  }

  if (!treino.titulo) {
    return (
      <div className="containerTreino">
        <h2>⚠️ Nenhum treino encontrado!</h2>
        <p>Volte para a Home e selecione um treino válido.</p>
      </div>
    ); 
  }

  return (
    <div className="containerTreino">
      <h1>📌{treino.titulo}</h1>
     
      <span>Status: {concluido ? "Concluído ✅" : "Pendente ⏳"}</span>
      
      <h3>Agrupamento: {treino.grupo}</h3>
   
      <p><strong>Exercício:</strong> {treino.descricao}</p>
      <p><strong>Séries:</strong> {treino.series}</p>
      <p><strong>Descanso:</strong> {treino.descanso}</p>

      <div>
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={zerar}>Zerar</button>
        <span> {segundos} segundos</span>
      </div>

      <br />

      <button className="concluir" onClick={alternarStatus}>
        {concluido ? "Refazer 🔄" : "Concluir ✅"}
      </button>
    </div>
  );
}

export default Treino;