import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom"//7.importo usenavigate

import "./Buscador.css"
import { useState } from "react"; //1.importamos useState

export const Buscador = () => {
 

//2.creamos los estados  que manejan el texto 
const navigate = useNavigate() //8.defino la variable   
const [txtBuscador, setTxtBuscador ] = useState ("")
  //3. realizamos la funcion para controlar el submit (cuando apretamos el boton buscar )
  const handleSubmit = (e) =>{
  e.preventDefault(); // 5. no se realiza el submit con preventDefault

  navigate (`/?search=${txtBuscador}`) //9. enviar lo q se escribe en el input a la url 
  }

  return (
    <form className="containerBuscador" onSubmit={handleSubmit}> {/*4. agregamos el evemto al from handleSubmit*/}
      <div className="cajaBuscador">
        <input 
        value={txtBuscador}
        onChange={(e)=>setTxtBuscador(e.target.value)}  //6.. controlamos el input
        type="text"
         className="inputBuscador" />
        <button type="submit" className="botonBuscador">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
