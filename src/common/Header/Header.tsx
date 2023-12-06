import "./Header.css";
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate();

return (
<div className="header">
    <div className="spacerDiv"></div>
    <div className="button" onClick={() => navigate("/")}>INICIO</div>
    <div className="button" onClick={() => navigate("/report")}>REPORTAR PRODUCCION</div>
    <div className="button" onClick={() => navigate("/tracker")}>REGISTRO DE PRODUCCION</div>
</div>
)};