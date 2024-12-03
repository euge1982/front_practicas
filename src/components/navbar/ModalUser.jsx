import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../redux/user/userSlice";
import { jwtDecode } from "jwt-decode";

const ModalUser = () => {
  const dispatch = useDispatch(); // Hook para despachar acciones de Redux
  const navigate = useNavigate(); // Hook para navegar entre rutas

  // Función para cerrar sesión, limpia el usuario actual y redirige al usuario a la página de inicio
  const handleLogout = () => {
    dispatch(clearCurrentUser());
    navigate("/login");
  }; 
  
  // Obtiene el token del estado global
  const token = useSelector((state) => state.user.currentUser.access_token);

  // Decodifica el token
  const decodedToken = jwtDecode(token);
  
  // Obtiene el rol del usuario
  const role = decodedToken.role; 
  
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AccountCircleIcon sx={{ color: 'white' }}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {role === "SUPER" ?  // Si el rol del usuario es SUPER, mostrar el enlace al dashboard
          <DropdownMenuItem>
            <Link to="/dashboard">Dashboard</Link>
          </DropdownMenuItem> : null
        }
        <DropdownMenuItem>
          <Button onClick={handleLogout}>Log Out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModalUser;