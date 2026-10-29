import { BrowserRouter, Routes , Route } from "react-router-dom";

import Header from "./Components/Header/index"; 
import Erro from "./Pages/Erro/index";
import Home from "./Pages/Home/index";
import MeusTreinos from "./Pages/MeusTreinos/index";
import Treino from "./Pages/Treino/index"; 


function RoutesApp(){
    return(
   
         <BrowserRouter>
         <Header/>
        <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path = "/meustreinos" element = {<MeusTreinos/>}/> 
      <Route path = "/treino/:id" element = {<Treino/>}/>
      <Route path ="*" element = {<Erro/>}/>
       </Routes>               
        </BrowserRouter>
    )
}

export default RoutesApp; 