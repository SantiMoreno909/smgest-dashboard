import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="textoNegro btn btn-dark" to="/">
            <FaIcons.FaHome className="iconoSidebar" /> Inicio
          </Link>
        </li>
        <li>
          <Link className="textoNegro btn btn-dark" to="/productos">
            <FaIcons.FaWineBottle className="iconoSidebar" />
            Productos
          </Link>
        </li>
        <li>
          <Link className="textoNegro btn btn-dark" to="/usuarios">
            <FaIcons.FaUser className="iconoSidebar" /> Usuarios
          </Link>
        </li>
        <li>
          <Link className="textoNegro btn btn-dark" to="/categorias">
            <FaIcons.FaList className="iconoSidebar" />
            Categorias
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
