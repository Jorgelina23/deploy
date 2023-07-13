import { get } from "../utils/httpCliente.js"
import {useState,useEffect} from "react"
import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import { Spinner } from "./Spinner.jsx"
import { useQuery } from "../hooks/useQuery.jsx"
export const PeliculasGrid=()=>{
    
const [peliculas,setPeliculas] = useState([])
const [cargando,setCargando]= useState(true);


//12. utilizo useQuery() para  obtener lo que buscamos 
const query = useQuery()
const search = query.get("search")
//11.guardo en variable los metodos q trae useLocation. vemos en el navegador lo q viaja en la url (queryparams), separamos lo q buscamos con .location.search
/*const location = useLocation();
console.log(location);
console.log(location.search)*/

useEffect (()=>{
 

    setCargando(true)
     //15. hago un ternario. si hay busqueda, asigna ese valor a una url si no muestra las peliculas 

     const searchURL = search 
     ?"/search/movie?query=" + search :"/discover/movie"

        get(searchURL).then((data)=>{
    /*         console.log(data); */
            setPeliculas(data.results);
        })
        setCargando(false)
},[search]) //14. agregar search a cuando se ejecute el cambio 

  if(cargando){
    return <Spinner/>
  }
return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)


}