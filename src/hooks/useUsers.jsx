import { useState, useEffect } from "react";
import { getUsers } from "../service/users.service";

const useUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0); // Estado para almacenar el total de usuarios
  const [usuarios, setUsers] = useState([]); // Estado para almacenar la lista completa de usuarios

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getUsers();
        const total = result.usuarios.length; // Calcula el total de usuarios
        setTotalUsers(total); // Actualiza el estado con el total de usuarios
        setUsers(result.usuarios); // Actualiza el estado con la lista completa de usuarios
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    }

    fetchData();
  }, []);

  return {
    totalUsers, // Devuelve el total de usuarios
    usuarios, // Devuelve la lista completa de usuarios
  };
};

export { useUsers };
