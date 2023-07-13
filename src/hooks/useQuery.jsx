import{useLocation} from "react-router-dom" // 10. importamos useLocation https://reactrouter.com/en/main/hooks/use-location

//13. utilizamos  este hook para tomar lo que viene por params
export const useQuery = () =>{
    return new URLSearchParams(useLocation().search)//https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
  }
  // en useQuery lo que digo es que quiero tener una nueva busqueda de lo que se estaba buscando por parametro y para eso uso useLocation().search
  
  //11.guardo en variable los metodos q trae useLocation. vemos en el navegador lo q viaja en la url (queryparams), separamos lo q buscamos con .location.search
  /*const location = useLocation();
  console.log(location);
  console.log(location.search)*/