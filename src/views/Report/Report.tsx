import "./Report.css";
import { Input } from "../../common/Input/Input";
import { registerProduction } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { ProductionData } from "../../types";

export const Report = () => {

    const navigate = useNavigate();

    const [registerBody, setRegisterBody] = useState<ProductionData>({
        cantidad: "",
        fecha: ""
      });

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterBody((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))};
    
    const reportProduction = () => {
        registerProduction(registerBody)
            .then(() => {
                navigate("/");
            })
            .catch((error) => console.log(error));
          };    

    return (
    <div className="report">
        <div className="reporterScreen">
            <div>REPORTE DE PRODUCCION</div>
            <div>            
              <Input
                type={"number"}
                placeholder="Introduzca la cantidad producida"
                value={registerBody.cantidad}
                name={"cantidad"}
                className="defaultInput"
                manejadora={inputHandler}
              />
            </div>
            <div>
              <Input
                type={"text"}
                placeholder="Introduzca la fecha con el formato AAAA-MM-DD"
                value={registerBody.fecha}
                name={"fecha"}
                className="defaultInput"
                manejadora={inputHandler}
              />
            </div>
            <div className="button" onClick={() => reportProduction()}>REPORTAR</div>
        </div>
    </div>
    )};