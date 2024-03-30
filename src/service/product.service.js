const getProducts = async () => {
  try {
    const data = await fetch("http://localhost:3005/api/productos");
    const result = await data.json();
    return result;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

export { getProducts };
