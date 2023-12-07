import axios from "axios";
import { ProductionData, DatesFilter } from "../types";

//GET

export const bringAllProductions = async () => {
    return await axios.get(`http://localhost:5000/api/productions/`);
  };

//POST

//Se ha empleado una solicitud POST para traer las producciones filtradas por fecha
//en lugar de una solicitud GET, puesto que axios.get no permite mandar un body
//como segundo ardgumento, sólo permite mandar parámetros en la propia URL

export const bringProductionsBetweenData = async (datasBody: DatesFilter) => {
    return axios.post(`http://localhost:5000/api/productions/dates`, datasBody);
  };

export const registerProduction = async (registerBody: ProductionData) => {
    return axios.post(`http://localhost:5000/api/productions/`, registerBody);
  };