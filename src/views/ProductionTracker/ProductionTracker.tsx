import "./ProductionTracker.css";
import { Input } from "../../common/Input/Input";
import { useEffect, useState, ChangeEvent } from "react";
import { bringAllProductions } from "../../services/apiCalls";
import { bringProductionsBetweenData } from "../../services/apiCalls";
import { DatesFilter } from "../../types";

export const ProductionTracker = () => {
    const [productions, setProductions] = useState([]);

    useEffect(() => {
     console.log("soy productions", productions)
        }, [productions]);
    
    useEffect(() => {
        bringAllProductions()
        .then((results) => {
            setProductions(results.data.data);
          })
            .catch((error) => console.log(error));
       }, []);

    const [datasBody, setDatasBody] = useState<DatesFilter>({
        fechaInicial: "",
        fechaFinal: ""
      });
    
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDatasBody((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))};   

    const bringAll = () => {
        bringAllProductions()
            .then((results) => {
              setProductions(results.data.data);
            })
              .catch((error) => console.log(error));
        };

    const bringBetween = () => {
        bringProductionsBetweenData(datasBody)
            .then((results) => {
              setProductions(results.data.data);
            })
              .catch((error) => console.log(error));
        };        

    return (
    <>
    <div className="subheader">
        <div>FILTRAR POR FECHAS</div>
        <div className="inputDiv">
            Fecha inicial              
            <Input
                type={"text"}
                placeholder="Introduzca la fecha con el formato AAAA-MM-DD"
                value={datasBody.fechaInicial}
                name={"fechaInicial"}
                className="defaultInput"
                manejadora={inputHandler}
              />
        </div>
        <div className="inputDiv">
            Fecha final
            <Input
                type={"text"}
                placeholder="Introduzca la fecha con el formato AAAA-MM-DD"
                value={datasBody.fechaFinal}
                name={"fechaFinal"}
                className="defaultInput"
                manejadora={inputHandler}
              />
        </div>
        <div className="trackerButton" onClick={() => bringBetween()}>APLICAR FILTRO</div>
        <div className="trackerButton" onClick={() => bringAll()}>ELIMINAR FILTRO</div>      
    </div>
    <div className="productionTracker"></div>
    </>
    )};