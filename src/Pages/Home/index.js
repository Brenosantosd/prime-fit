import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "./home.css";

function Home(){

  const [treinos, setTreinos] = useState([
    { id: 1, titulo: "Treino A", grupo: "Peito e Tríceps", descricao: "Supino reto , supino 45º articulado , Paralelas e Tríceps corda", series: "3 x 10 a 15", descanso: "1 min" },
    { id: 2, titulo: "Treino B", grupo: "Costas e Bíceps", descricao: "Puxada  Pronada na polia , Remada baixa com triângulo, Rosca direta , Rosca scott ", series: "3 x 10 a 15", descanso: "1 min" },
    { id: 3, titulo: "Treino C", grupo: "Membros inferiores", descricao: "Agachamento Hack , Cadeira extensora , Mesa-flexora , Flexão plantar ", series: "3 x 10 a 15", descanso: "1 min" }
  ]);

  function adicionarTreino(item){
    const minhaLista = localStorage.getItem("@treinos");
    const treinosSalvos = JSON.parse(minhaLista) || [];

    // 1. Verifica se já está salvo no localStorage
    const hastreino = treinosSalvos.some((treinoSalvo) => treinoSalvo.id === item.id);
   
    if(hastreino){
       alert("Esse treino já foi adicionado");
       return; 
    }
   
    // 2. Adiciona e salva
    treinosSalvos.push(item);
    localStorage.setItem("@treinos", JSON.stringify(treinosSalvos));
    alert("Treino Salvo com sucesso! ");
  }

  return(
    <div className="conteiner">
      <h1 className="titulo-home">Planos de treino</h1>

      <div>
        {treinos.map((item) => {
          return(
            <article className="treinos" key={item.id}>
              <h2>📌{item.titulo}</h2>
              <h3>🎯 Agrupamento: {item.grupo}</h3>
              <p><strong>📋 Exercícios: </strong>{item.descricao}</p>
              <p><strong>🔁 Séries:</strong> {item.series}</p>
              <p><strong>⏳Descanso:</strong> {item.descanso}</p>
              <div className="areabtn">
                <button className="botao" onClick={() => adicionarTreino(item)}>
                  Adicionar
                </button> 
                <Link className="botao" to={`/treino/${item.id}`}>
                  Detalhes
                </Link>            
              </div>  
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;