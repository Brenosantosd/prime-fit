import React , {useState , useEffect} from "react";
import {Link} from "react-router-dom"
import "./header.css"




function Header(){
    return(
        <header className = "cabecalho">
          <h1>PRIME FIT <span>1.0</span></h1>
        <div className="links">
        <Link className="home" to = "/">Home</Link>
        <Link  className = "meustreinos"to = "/meustreinos">Meus Treinos</Link>
     
        </div>    

        </header>
    )
}

export default Header; 