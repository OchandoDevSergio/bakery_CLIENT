import "./ProductionTracker.css";
import { Input } from "../../common/Input/Input";
import { useEffect, useState, ChangeEvent } from "react";
import { bringAllProductions } from "../../services/apiCalls";
import { bringProductionsBetweenData } from "../../services/apiCalls";
import { DatesFilter } from "../../types";
import { DataGrid } from "@mui/x-data-grid";

export const ProductionTracker = () => {
    const [productions, setProductions] = useState([]);
    
    //Empleamos este primer hook useEffect para que nos traiga todas las 
    //producciones al cargar la vista
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

    //Función para solicitar de nuevo todas las producciones cada vez que
    //quitemos los filtros
    const bringAll = () => {
        bringAllProductions()
            .then((results) => {
              setProductions(results.data.data);
            })
              .catch((error) => console.log(error));
        };

    //Función para traer las producciones entre las fechas introducidas
    const bringBetween = () => {
        bringProductionsBetweenData(datasBody)
            .then((results) => {
              setProductions(results.data.data);
            })
              .catch((error) => console.log(error));
        };      
        
    //Vinculación entre las columnas de la tabla y los parametros de los
    //objetos que nos han llegado de la API  
    const columns = [
      {
      field: 'fecha',
      headerName: 'Fecha de producción',
      flex: 1,
      minwidth: 150,
      },
      {
      field: 'cantidad',
      headerName: 'Producción',
      flex: 1,
      minwidth: 150,
      },
    ]

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
    <div className="productionTracker">
      <div className="gridContainer">
        <DataGrid
          columns={columns}
          rows={productions}
          pageSizeOptions={[6]}
          autoPageSize
          disableRowSelectionOnClick
          disableColumnSelector
          className="grid"
          sx={{
            borderRadius: 5, 
            boxShadow: 2,
            border: 2,
            borderColor: 'grey.500',
            '& .MuiDataGrid-cell:hover': {
              color: 'text.primary',
            },
          }}
        />
      </div>
    </div>
    </>
    )};