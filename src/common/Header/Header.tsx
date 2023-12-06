import "./Header.css";
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate();

return (
<div className="header">
    <div className="spacerDiv"></div>
    <div className="headerButton" onClick={() => navigate("/")}>INICIO</div>
    <div className="headerButton" onClick={() => navigate("/report")}>REPORTAR PRODUCCION</div>
    <div className="headerButton" onClick={() => navigate("/tracker")}>REGISTRO DE PRODUCCION</div>
</div>
)};