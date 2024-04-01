const getUsers = async () => {
  try {
    const data = await fetch("http://localhost:3005/api/usuarios");
    const result = await data.json();
    return result;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

export { getUsers };
